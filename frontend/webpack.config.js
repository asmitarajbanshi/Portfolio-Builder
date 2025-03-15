import CreateWebsiteDialog from "@components/CreateWebsiteDialog";

const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@utils": path.resolve(__dirname, "src/utils/")
    },
    extensions: [".js", ".jsx"] // Ensure Webpack looks for .js and .jsx
  }
};
