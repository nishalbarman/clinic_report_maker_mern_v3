const env = process.env.NODE_ENV;

export const tsup = {
  splitting: true,
  clean: true, // clean up the dist folder
  dts: true, // generate dts files
  format: ["cjs", "esm"], // generate cjs and esm files
  minify: true,
  bundle: true,
  skipNodeModulesBundle: false,
  entryPoints: ["src/index.ts"],
  watch: env === "development",
  outDir: "dist",
  entry: ["src/**/*.ts"], //include all files under src
};
