const withSass = require('@zeit/next-sass')
const withTM = require('next-plugin-transpile-modules');
const withTypescript = require('@zeit/next-typescript')

module.exports = withTM(withSass(withTypescript({
  target: "serverless",
  distDir: "../server/views",
  transpileModules: ['react-bulma-components'],
  sassLoaderOptions: {
    includePaths: ["./src/next/styles/"]
  },
})));