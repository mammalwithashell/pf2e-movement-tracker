import copy from "rollup-plugin-copy";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      input: "scripts/main.ts",
      output: {
        dir: "dist/scripts/",
        entryFileNames: "main.js",
        format: "es",
      },
    },
  },
  plugins: [
    copy({
      targets: [{ src: "module.json", dest: "dist" }],
      hook: "writeBundle",
    }),
  ],
});
