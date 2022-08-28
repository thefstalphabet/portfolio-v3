const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "#4E54C8",
          "@menu-item-active-bg": "#8f94fb",
        },
      },
    },
  ],
};
