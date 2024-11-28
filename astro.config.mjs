// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://digitaleweltlibrary.github.io",
  base: "sunnyside-agency-landing-page-main/",
});