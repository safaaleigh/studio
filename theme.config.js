const YEAR = new Date().getFullYear()

export default {
  github: 'https://github.com/safaaleigh/studio',
  docsRepositoryBase: 'https://github.com/safaaleigh/studio/blob/main',
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Safaa Hansen.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
