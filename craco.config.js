const path = require("path");

/** @type {import('@craco/craco').CracoConfig} */
const cracoConfig = {
  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: [path.resolve("./src/styles")],
        },
      },
    },
  },
};

module.exports = cracoConfig;
