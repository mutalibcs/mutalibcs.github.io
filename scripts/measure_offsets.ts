import { spawn } from 'node:child_process';

async function measureViewport(width: number, height: number): Promise<{ titleTop: number; sectionTop: number; elements?: any[] }> {
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const port = 9222 + Math.floor(Math.random() * 500);
  const chromeProc = spawn(chromePath, [
    '--headless',
    `--remote-debugging-port=${port}`,
    `--window-size=${width},${height}`,
    'http://localhost:4321/'
  ]);

  // Wait for remote debugging endpoint
  let pageWsUrl = '';
  for (let i = 0; i < 40; i++) {
    await new Promise((r) => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      const tabs = await res.json();
      if (tabs && tabs[0] && tabs[0].webSocketDebuggerUrl) {
        pageWsUrl = tabs[0].webSocketDebuggerUrl;
        break;
      }
    } catch {}
  }

  if (!pageWsUrl) {
    chromeProc.kill();
    throw new Error(`Could not connect to Chrome debugging port ${port}`);
  }

  const ws = new WebSocket(pageWsUrl);
  await new Promise((resolve) => ws.onopen = resolve);

  let msgId = 1;
  const send = (method: string, params: any = {}) => {
    return new Promise<any>((resolve) => {
      const id = msgId++;
      const handler = (evt: MessageEvent) => {
        const data = JSON.parse(evt.data);
        if (data.id === id) {
          ws.removeEventListener('message', handler);
          resolve(data.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id, method, params }));
    });
  };

  // Explicitly set exact viewport dimensions and mobile mode
  await send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 768
  });

  // Give layout time to settle
  await new Promise((r) => setTimeout(r, 600));

  const evalResult = await send('Runtime.evaluate', {
    expression: `(() => {
      const sec = document.querySelector('#lead-research');
      const title = document.querySelector('#lead-research .pub-title');
      const elements = Array.from(document.querySelectorAll('.site-header, main, .hero-section, .hero-content-col, .hero-portrait-col, .status-badge, .hero-name, .hero-affiliation, .hero-bio, .hero-actions')).map(el => ({
        tag: el.tagName,
        cls: el.className,
        top: Math.round(el.getBoundingClientRect().top),
        bottom: Math.round(el.getBoundingClientRect().bottom),
        height: Math.round(el.getBoundingClientRect().height)
      }));
      return {
        sectionTop: sec ? Math.round(sec.getBoundingClientRect().top) : -1,
        titleTop: title ? Math.round(title.getBoundingClientRect().top) : -1,
        elements
      };
    })()`,
    returnByValue: true
  });

  ws.close();
  chromeProc.kill();

  return evalResult.result.value;
}

async function run() {
  console.log('Measuring vertical offsets of Lead Publication...');
  const mobile = await measureViewport(360, 800);
  console.log(`Mobile (360x800): Section Top = ${mobile.sectionTop}px, Title Top = ${mobile.titleTop}px`);
  console.log('Mobile elements:', mobile.elements);

  const desktop = await measureViewport(1280, 800);
  console.log(`Desktop (1280x800): Section Top = ${desktop.sectionTop}px, Title Top = ${desktop.titleTop}px`);
}

run();
