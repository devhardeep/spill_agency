/* eslint-disable no-undef */
const dotenv = require('dotenv')
const urljoin = require("url-join")
const config = require('./src/seo/data/siteConfig')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    description: config.siteDescription,
    image_url: `${urljoin(config.siteUrl, config.pathPrefix)}/images/logo.png`,
    site_url: urljoin(config.siteUrl, config.pathPrefix),
    title: config.siteTitle,
    author: "@IrfanAl10330213"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    '@contentful/gatsby-transformer-contentful-richtext',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-160200309-1",
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `uksgum5d3wpv`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `spillagency`
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icon: './static/favicon.png',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-native-lazy-load`,
            options: {
              loading: "lazy" // "lazy" | "eager" | "auto"
            }
          }
        ],
      },
    }
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "PT Mono",
    //           variants: ["400"],
    //           // fontDisplay: 'swap',
    //           // strategy: 'selfHosted' // 'base64' || 'cdn'
    //         },
    //         {
    //           family: "Bebas Neue",
    //           variants: ["400"],
    //           // fontDisplay: 'swap',
    //           // strategy: 'selfHosted' // 'base64' || 'cdn'
    //         },
    //         {
    //           family: "Lato",
    //           variants: ["400"],
    //           // fontDisplay: 'swap',
    //           // strategy: 'selfHosted' // 'base64' || 'cdn'
    //         },
    //       ],
    //     },
    //     // formats: ['woff2', 'woff'],
    //     // useMinify: true,
    //     // usePreload: true,
    //     // usePreconnect: false,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-offline',
    //   options: {
    //     runtimeCaching: [
    //       {
    //         urlPattern: /(\.js$|\.css$|static\/)/,
    //         handler: 'cacheFirst',
    //       },
    //       {
    //         urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
    //         handler: 'staleWhileRevalidate',
    //       },
    //     ],
    //     skipWaiting: true,
    //     clientsClaim: true,
    //   },
    // },
  ]
};
