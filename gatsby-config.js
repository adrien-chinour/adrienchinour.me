require(`dotenv`).config({
    path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
    siteMetadata: {
        siteTitle: `Adrien`,
        siteTitleAlt: `Adrien Chinour`,
        siteHeadline: `Développeur web indépendant.`,
        siteUrl: `https://adrienchinour.me`,
        siteDescription: `Adrien Chinour, développeur Web indépendant.`,
        siteLanguage: `fr`,
        siteImage: `/banner.jpg`,
        author: `@adrienchinour`,
    },
    plugins: [
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            // See the theme's README for all available options
            options: {
                navigation: [
                    {
                        title: `Blog`,
                        slug: `/blog`,
                    },
                    {
                        title: `À Propos`,
                        slug: `/about`,
                    },
                    {
                        title: `Contact`,
                        slug: `/contact`,
                    }
                ],
                externalLinks: [
                    {
                        name: `GitHub`,
                        url: `https://github.com/adrien-chinour`,
                    },
                    {
                        name: `Stack Overflow`,
                        url: `https://stackoverflow.com/users/13884867/adrien-chinour`,
                    },
                    {
                        name: `Mon CV`,
                        url: `/adrien-chinour.pdf`
                    }
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
                short_name: `minimal-blog`,
                description: `Adrien Chinour, développeur Web indépendant.`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#6B46C1`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify`,
        shouldAnalyseBundle && {
            resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
            options: {
                analyzerMode: `static`,
                reportFilename: `_bundle.html`,
                openAnalyzer: false,
            },
        },
    ].filter(Boolean),
}