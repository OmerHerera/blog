module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-137814391-2",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `omher`,
        short_name: `omher`,
        start_url: `/`,
        icon: `content/assets/icon.png`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Omher - What I learn this time`,
    author: `Omer Herera`,
    description: `I write here all the useful things I learn and try to share them with the world. JS, JavaScript, node, nodejs, infra`,
    url: 'https://omher.com/',
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/Omer_He`,
      },
      {
        name: `github`,
        url: `https://github.com/OmerHerera`,
      },
    ],
    twitterUsername: "@Omer_He",
  },
}
