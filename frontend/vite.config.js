import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy /api requests to the backend server
      "/api": {
        target: "http://127.0.0.1:4222", // Your backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
