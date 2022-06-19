const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '../dist/',
  devServer: {
    port: 3000
  }
})