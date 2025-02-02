import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    name: "Treeviz", // Defines `Treeviz` as a global namespace
    sourcemap: true
  },
  plugins: [typescript()]
};
