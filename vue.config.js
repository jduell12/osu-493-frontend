module.exports = {
  devSever: {
    proxy: {
      "^/api": {
        target: "https://osu-493-portfolio.ue.r.appspot.com",
        changeOrigin: true,
      },
    },
  },
};
