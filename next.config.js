const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['anibook-ui'])

module.exports = withPlugins([
  withImages({
    esModule: true
  }),
  withTM
])
