module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  devServer: {
    proxy: 'https://makeawishau--humanpixel.lightning.force.com/services/apexrest/DynamicFormRestService'
  }
}
