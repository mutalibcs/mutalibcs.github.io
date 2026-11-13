export interface PublicationCitationData {
  title: string;
  authors: string[];
  type: 'journal' | 'conference' | 'preprint' | 'book';
  year: number;
  date: string;
  venue: string;
  journal?: string;
  conference?: string;
  volume?: number | string;
  issue?: number | string;
  pages?: string;
  publisher?: string;
  doi?: string;
  publisherUrl?: string;
  isbn?: string;
}

export function generateBibTeX(pub: PublicationCitationData, slug: string): string {
  const firstAuthor = pub.authors[0] || 'mutalib';
  const lastName = firstAuthor.split(' ').pop()?.toLowerCase() || 'mutalib';
  const citeKey = `${lastName}${pub.year}${slug.split('-')[0]}`;
  const authorString = pub.authors.join(' and ');

  const fields: string[] = [
    `  title = {${pub.title}}`,
    `  author = {${authorString}}`
  ];

  if (pub.type === 'journal') {
    fields.push(`  journal = {${pub.journal || pub.venue}}`);
    if (pub.volume) fields.push(`  volume = {${pub.volume}}`);
    if (pub.issue) fields.push(`  number = {${pub.issue}}`);
    if (pub.pages) fields.push(`  pages = {${pub.pages}}`);
    fields.push(`  year = {${pub.year}}`);
    if (pub.publisher) fields.push(`  publisher = {${pub.publisher}}`);
    if (pub.doi) fields.push(`  doi = {${pub.doi}}`);
    if (pub.publisherUrl) fields.push(`  url = {${pub.publisherUrl}}`);
    return `@article{${citeKey},\n${fields.join(',\n')}\n}`;
  }

  if (pub.type === 'book') {
    fields.push(`  booktitle = {${pub.conference || pub.venue}}`);
    if (pub.pages) fields.push(`  pages = {${pub.pages}}`);
    fields.push(`  year = {${pub.year}}`);
    fields.push(`  publisher = {${pub.publisher || 'Taylor \\& Francis'}}`);
    if (pub.doi) fields.push(`  doi = {${pub.doi}}`);
    if (pub.publisherUrl) fields.push(`  url = {${pub.publisherUrl}}`);
    return `@incollection{${citeKey},\n${fields.join(',\n')}\n}`;
  }

  // conference
  fields.push(`  booktitle = {${pub.conference || pub.venue}}`);
  if (pub.pages) fields.push(`  pages = {${pub.pages}}`);
  fields.push(`  year = {${pub.year}}`);
  if (pub.publisher) fields.push(`  publisher = {${pub.publisher}}`);
  if (pub.doi) fields.push(`  doi = {${pub.doi}}`);
  if (pub.publisherUrl) fields.push(`  url = {${pub.publisherUrl}}`);
  return `@inproceedings{${citeKey},\n${fields.join(',\n')}\n}`;
}

export function generatePlainCitation(pub: PublicationCitationData): string {
  const authorString = pub.authors.join(', ');
  let citation = `${authorString} (${pub.year}). "${pub.title}." `;

  if (pub.type === 'journal') {
    citation += `${pub.journal || pub.venue}`;
    if (pub.volume) citation += `, ${pub.volume}`;
    if (pub.issue) citation += `(${pub.issue})`;
    if (pub.pages) citation += `, pp. ${pub.pages}`;
  } else if (pub.type === 'book') {
    citation += `In ${pub.conference || pub.venue}`;
    if (pub.pages) citation += `, pp. ${pub.pages}`;
    if (pub.publisher) citation += `. ${pub.publisher}`;
  } else {
    citation += `In ${pub.conference || pub.venue}`;
    if (pub.pages) citation += `, pp. ${pub.pages}`;
    if (pub.publisher) citation += `. ${pub.publisher}`;
  }

  if (pub.doi) {
    citation += `. DOI: ${pub.doi}`;
  }
  return citation;
}
