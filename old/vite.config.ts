import { defineConfig } from 'vite';

export default defineConfig({
  // Recommended for most SSR projects
  ssr: {
    // Bundle these packages into the server build instead of externalizing them
    // This avoids CommonJS/ESM issues and ensures compatibility during SSR
    noExternal: [
      'htmx.org',
      'htmx-ext-preload',
      'htmx-ext-sse',
      'idiomorph',
      // Add any other pure-client or problematic deps here if needed
    ],
  },

  // Optional but helpful for dev performance if you have deep imports
  optimizeDeps: {
    include: ['htmx.org', 'idiomorph'], // Pre-bundle these in dev
  },

  // If you want a manifest for asset preloading (good for production performance)
  build: {
    manifest: true, // Generates ssr-manifest.json if you use it in your server render
    rollupOptions: {
      // Ensure client build knows its entry
      input: 'src/entry-client.ts', // Uncomment if needed
    },
  },
});