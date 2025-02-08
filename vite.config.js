import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["df3e-177-8-222-101.ngrok-free.app"], // Agora está em um array
  },
});
