import { site } from '../../content/site'

type Props = { title: string; description?: string; path: string; image?: string; type?: 'website' | 'article' }

/**
 * React 19 hoists <title>/<meta>/<link> rendered anywhere in the tree into <head>.
 * Every page renders exactly one <Seo />.
 */
export function Seo({ title, description = site.description, path, image = '/assets/images/hero/dyau-hero-hawa-mahal-1200.webp', type = 'website' }: Props) {
  const fullTitle = path === '/' ? `${title} | ${site.name}` : `${title} | ${site.name} — ${site.tagline}`
  const url = `${site.url}${path}`
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${site.url}${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
