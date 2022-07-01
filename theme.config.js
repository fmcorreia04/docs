export default {
    projectLink: 'https://github.com/fmcorreia04/docs', // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/fmcorreia04/docs', // base URL for the docs repository
    titleSuffix: ' | Docs @FMCorreia',
    nextLinks: true,
    prevLinks: true,
    search: true,
    darkMode: true,
    footer: true,
    footerText: `${new Date().getFullYear()} © FMCorreia - Filipe Correia. `,
    footerEditLink: `Edit this page`,
    logo: (
      <>
        <div><b>Docs</b> @FMCorreia</div>
      </>
    ),
    
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="FMCorreia's Docs host information about the projects Filipe is involved." />
        <meta name="og:title" content="Docs @FMCorreia" />
      </>
    ),
  }