import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    strictPort:true,
    cors:true,

  },
  resolve: {
    alias: {
      assets: "/src/assets",
      css: "/src/assets/css",
      icons: "/src/assets/css",
      components: "/src/components",
      user: "/src/components/user",
      pages: "/src/pages",
      utils: "/src/utils",
    },
  },
});