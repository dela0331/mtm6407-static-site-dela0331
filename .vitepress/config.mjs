import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MTM6407",
  description: "Web Dev IV",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Emulators', link: '/methods/emulators/index.md' },
      { text: 'Flash Carts', link: '/methods/flash-carts/index.md' },
      { text: 'Jailbreaks', link: '/methods/jailbreaks/index.md' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Emulators', link: '/methods/emulators/index.md' },
          { text: 'Flash Carts', link: '/methods/flash-carts/index.md' },
          { text: 'Jailbreaks', link: '/methods/jailbreaks/index.md' }
        ]
      }
    ],

    socialLinks: [
      {  icon: 'v', link: 'https://vimm.net/vault', ariaLabel: `Vimm's Lair - Preserving the Classics` }
    ]
  }
})
