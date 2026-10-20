import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://zvwgvx.com",
  integrations: [mdx()],
  output: "static",
  build: {
    format: "directory"
  }
});
