const babel = require("@rollup/plugin-babel");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");

module.exports = {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "auto",
    },
    {
      file: "dist/index.esm.js",
      format: "es",
    },
  ],
  plugins: [
    json(),
    resolve({
      preferBuiltins: true,
      moduleDirectories: ["node_modules"],
    }),
    commonjs({
      include: /node_modules/,
      ignoreDynamicRequires: true,
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
  ],
  external: (id) => {
    return (
      /node_modules/.test(id) ||
      [
        "http",
        "https",
        "stream",
        "zlib",
        "url",
        "fs",
        "crypto",
        "util",
        "events",
      ].includes(id)
    );
  },
};
