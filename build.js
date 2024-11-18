const esbuild = require("esbuild");

const packageJson = require("./package.json");

const baseConfig = {
  entryPoints: ["src/index.js"],
  outdir: "dist",
  bundle: true,
  sourcemap: true,
  define: {
    APP_VERSION: `"${packageJson.version}"`, // 환경 변수 설정
  },
};

Promise.all([
  // 한번은 cjs
  esbuild.build({
    ...baseConfig,
    format: "cjs",
    outExtension: {
      ".js": ".cjs",
    },
  }),

  // 한번은 esm
  esbuild.build({
    ...baseConfig,
    format: "esm",
  }),
]).catch(() => {
  console.log("Build failed");
  process.exit(1);
});
