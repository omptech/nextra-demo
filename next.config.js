const withNextra = require('nextra')('nextra-theme-docs', './theme.config.jsx')
module.exports = withNextra({
    reactStrictMode: true,
    output: 'export',
})