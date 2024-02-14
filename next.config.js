const isProd = process.env.NODE_ENV === 'production'
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})


module.exports = withNextra({
    output: "export",
    // Your existing configuration and new conditional paths
    reactStrictMode: true,
    basePath: isProd ? '/nextra-demo' : '',
    assetPrefix: isProd ? '/nextra-demo/' : '',
});