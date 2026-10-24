// @ts-check
import { defineConfig } from 'astro/config';
import { markdownRemarkRehype } from './site.config.mjs';

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: 'always',
	},
	markdown: {
		remarkRehype: markdownRemarkRehype,
	},
});
