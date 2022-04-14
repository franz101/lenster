const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching
  },
  reactStrictMode: true
})

const sentryWebpackPluginOptions = {
  silent: true
}

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
