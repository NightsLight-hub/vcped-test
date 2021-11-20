module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: false,
      preload: 'src/preload.js'
    }
  }
};
