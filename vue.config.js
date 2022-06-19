const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/blue-schedule-frontend/',
  devServer: {
    port: 3000
  }
})