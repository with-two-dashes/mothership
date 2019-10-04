module.exports = {
  siteMetadata: {
    title: `With-Two-Dashes`,
    description: `Huh, how strange. I suppose this is a website, but can this truly be real?`,
    author: `@not_two_hyphens`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {

      }
    },
    {
      resolve: `@talves/gatsby-plugin-netlify-cms`,
      options: {
        manualInit: true,
        enableIdentityWidget: true,
        publicPath: `backstage`,
        htmlTitle: `Content Manager`,
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingID: `G-K4X8HFZS5M`, // AKA MeasurementID, here
        exclude: []
      }
    },
    {
      // NOTE: keep this as the last item.
      resolve: 'gatsby-plugin-netlify',
      options: {

      }
    }
  ]
}
