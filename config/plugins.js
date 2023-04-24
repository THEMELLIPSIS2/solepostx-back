module.exports = () => ({
  wysiwyg: {
    enabled: true,
    resolve: "./src/plugins/wysiwyg", // path to plugin folder
  },
  plausible: {
    config: {
      // sharedLink: ,
    },
  },
  seo: {
    enabled: true,
  },
});
