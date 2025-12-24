import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// componentTagger removed — this project no longer depends on lovable-tagger
// If you want tagging during development, add a local plugin here.

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
