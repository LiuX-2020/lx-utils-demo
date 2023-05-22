import typescript from "@rollup/plugin-typescript"
import json from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { babel } from '@rollup/plugin-babel'
const formatName = "hello"
export default {
  input: "./src/index.ts",
  output: [
    {
      file: "lib/bundle.es.js",
      format: "es",
    },
    {
      file: "lib/bundle.cjs.js",
      format: "cjs",
    },
    {
      file:"lib/bundle.esm.js",
      format: "esm",
    },
    {
      file: "lib/bundle.browser.js",
      format: "es",
      name: formatName,
    },
  ],
  plugins: [
    json(),
    commonjs({
      include: /node_modules/,
    }),
    resolve({
      preferBuiltins: true,
      jsnext: true,
      main: true,
      brower: true,
    }),
    typescript(),
    babel({ exclude: "node_modules/**" }),
  ],
}