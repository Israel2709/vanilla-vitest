import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  test: {
    // Configuraciones específicas de Vitest pueden ir aquí
    globals: true,
    environment: "jsdom",
  },
});
