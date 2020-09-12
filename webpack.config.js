const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const WebpackGitHash = require("webpack-git-hash");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "single-spa-books",
    projectName: "navbar",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    output: {
      filename: `[githash].${defaultConfig.output.filename}`,
    },
    plugins: [new WebpackGitHash()],
  });
};
