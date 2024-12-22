import { defineConfig } from 'astro/config';
import vercelAdapter from '@astrojs/vercel';


export default defineConfig({
  output: 'server',
  adapter: vercelAdapter(),
});
