const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
module.exports = withNextra({
    reactStrictMode: true,
    output: 'export',
})