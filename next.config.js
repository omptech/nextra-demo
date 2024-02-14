const isProd = process.env.NODE_ENV === 'production'
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})

module.exports = {
    // Your existing configurations
    reactStrictMode: true,
    // Add the export configuration
    output: 'export',
    // Your basePath and assetPrefix configurations
    basePath: process.env.NODE_ENV === 'production' ? '/nextra-demo' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/nextra-demo/' : '',
};