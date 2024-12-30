import { defineConfig } from 'astro/config';
import vercelAdapter from '@astrojs/vercel';
import react from '@astrojs/react';


export default defineConfig({
  output: 'server',
  adapter: vercelAdapter(),
  integrations: [react()],
});
