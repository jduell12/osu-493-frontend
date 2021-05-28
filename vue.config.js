module.exports = {
  devSever: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
};
