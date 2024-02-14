const isProd = process.env.NODE_ENV === 'production'
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})


module.exports = withNextra({
    images: {
        unoptimized: true,
    },
    output: "export",
    // Your existing configuration and new conditional paths
    reactStrictMode: true
});