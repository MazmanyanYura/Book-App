import { nodeResolve } from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-import-css";
import terser from "@rollup/plugin-terser";
export default {
  input: "src/app.js",
  output: [
    {
      file: "dist/app.js",
      format: "iife",
      plugins: [terser()],
    },
  ],
  plugins: [
    css({
      output: "styles/bundle.css",
      minify: true,
    }),
    nodeResolve(),
  ],
};
