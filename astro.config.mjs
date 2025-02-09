// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: "/",
  integrations: [react()],
  i18n: {
    locales: ["es", "en", "fr", "de", "nl"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
