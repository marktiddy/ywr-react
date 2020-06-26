module.exports = {
  siteMetadata: {
    title: `YWR Gatsby`,
    description: `Experimental version of YWR`,
    author: `@marktiddy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "typography",
      options: {
        pathToConfigModule: "src/utils/typography.js",
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "youthworkresource.com",
        protocol: "http",

        restApiRoutePrefix: "wp-json",

        hostingWPCOM: false,
        useACF: false,

        acfOptionPageIds: [],

        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "www.youthworkresource.com",
          replacementUrl: "http://localhost:8000",
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,

        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/menus",
        ],
        // Blacklisted routes using glob patterns
        excludedRoutes: ["**/posts/1456"],

        keepMediaSizes: false,
        normalizer: function ({ entities }) {
          return entities
        },

        normalizers: normalizers => [
          ...normalizers,
          {
            name: "nameOfTheFunction",
            normalizer: function ({ entities }) {
              // manipulate entities here
              return entities
            },
          },
        ],
      },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
