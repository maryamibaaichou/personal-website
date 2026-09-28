import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "next-env.d.ts", "scripts/**"]),
  {
    // Static export: images are pre-sized in public/images, so next/image adds nothing.
    rules: { "@next/next/no-img-element": "off" },
  },
]);
