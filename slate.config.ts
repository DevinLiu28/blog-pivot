/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://slate-blog-demo.vercel.app',
  avatar: '/avatar.png',
  title: `Devin's Blog`,
  description: '',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2026 Devin Design',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/DevinLiu28'
    },
]
});