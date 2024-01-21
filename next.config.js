/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["to-string-loader", "css-loader"],
      },
    ],
  },
};

module.exports = nextConfig;
