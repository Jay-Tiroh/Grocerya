const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// SVG transformer
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

// Resolver for SVGs + absolute paths
config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...config.resolver.sourceExts, "svg"],

  extraNodeModules: {
    "@components": path.resolve(__dirname, "src/components"),
    "@screens": path.resolve(__dirname, "src/screens"),
    "@navigation": path.resolve(__dirname, "src/navigation"),
    "@constants": path.resolve(__dirname, "src/constants"),
    "@utils": path.resolve(__dirname, "src/utils"),
    "@assets": path.resolve(__dirname, "assets"), // <--- add this
  },
};

module.exports = config;
