module.exports = {
  siteTitle: 'Hi, I\'m Rubem',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Rubem Dias',
  githubUsername: 'rubem-dias',
  authorAvatar: '/images/photo_profile.jpeg',
  authorDescription: `I've started to study in 2021, working on my own projects and as autonomous working on landing pages.
  At the moment I have two years of experience in total as programmer.  I'm living in Brazil and disposed for any challenge for the whole world.
  `,
  skills: [
    {
      name: 'Javascript',
      level: 30
    },{
      name: 'Typescript',
      level: 30
    },{
      name: 'JQuery',
      level: 20
    }, 
    {
      name: 'React.JS',
      level: 30
    }, 
    {
      name: 'SQL',
      level: 50
    },
    {
      name: 'NoSQL',
      level: 40
    },
    {
      name: '.NET',
      level: 35
    }, 
    {
      name: 'C#',
      level: 35
    }, 
    {
      name: 'Java',
      level: 20
    }, 
  ],
  jobs: [
    {
      company: "Freelance",
      begin: {
        month: 'Feb',
        year: '2021'
      },
      duration: null,
      occupation: 'Frontend developer',
      description: 'Creating landing pages for costumers, using React.js and typescript'
    },
    {
      company: "LeverPro",
      begin: {
        month: 'Dec',
        year: '2021'
      },
      duration: '1 year',
      occupation: 'Jr. Data Analyst',
      description: "Performing SQL Analysis on SQL Server, Oracle, PostgreSQL and MySQL"
    },
    {
      company: "CAPYS IT Solutions",
      begin: {
        month: 'Aug',
        year: '2022'
      },
      duration: '6 mos',
      occupation: 'Jr. Net Developer',
      description: "Working on a complete real-estate application, using C# with .NET 6"
    },
    {
      company: "Biomtech Brasil",
      begin: {
        month: 'Jan',
        year: '2023'
      },
      duration: null,
      occupation: 'Jr. Full-stack Developer',
      description: "Using in back-end .NET 2.1, Entity Framework and JWT Auth. In front-end, Javascript, Ajax and Jquery on a jurisdiction application"
    }
  ],
  portifolio: [
    {
      image: "/images/portfolio.png",
      description: "Responsive restaurant site",
      url: "https://bitbucket.org/rdsilva/newsobremesaprojeto/src/master/"
    },
    {
      image: "/images/portfolioBarberWhite.gif",
      description: "Responsive barber shop",
      url: "https://github.com/rubem-dias/project-beauty-saloon"
    },
    {
      image: "/images/bertholdo.png",
      description: "Responsive awning & tools shop",
    }
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/rubem-dias-081930192/",
    github: "https://github.com/rubem-dias",
    email: "rubemdias65@gmail.com",
    gitlab: "https://gitlab.com/rubem-dias"
  },
  siteUrl: 'http://rubemdias.com/',
  pathPrefix: '/portfolio', // Note: it must *not* have a trailing slash.
  siteCover: '/images/404.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portifolio',
    }
  ]
}