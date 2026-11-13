import { getCollection } from 'astro:content';
import { generateBibTeX } from '../../../utils/citation';
import type { APIRoute } from 'astro';

export async function getStaticPaths() {
  const publications = await getCollection('publications');
  return publications.map((pub) => ({
    params: { slug: pub.id.replace(/\.md$/, '') },
    props: { pub }
  }));
}

export const GET: APIRoute = ({ props }) => {
  const pub = props.pub;
  const slug = pub.id.replace(/\.md$/, '');
  const bibtex = generateBibTeX(pub.data, slug);

  return new Response(bibtex, {
    status: 200,
    headers: {
      'Content-Type': 'application/x-bibtex; charset=utf-8',
      'Content-Disposition': `attachment; filename="${slug}.bib"`
    }
  });
};

