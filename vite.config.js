import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/share_xpenses/",
    build: { chunkSizeWarningLimit: 1600 },
});
