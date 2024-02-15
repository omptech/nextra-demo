const isProd = process.env.NODE_ENV === 'production'
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})


module.exports = withNextra({
    basePath: process.env.PR_NUMBER ? `/pr-${process.env.PR_NUMBER}` : '',
    assetPrefix: process.env.PR_NUMBER ? `/pr-${process.env.PR_NUMBER}` : '',
    images: {
        unoptimized: true,
    },
    output: "export",
    // Your existing configuration and new conditional paths
    reactStrictMode: true
});
