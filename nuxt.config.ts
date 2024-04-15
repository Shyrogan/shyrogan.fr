// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@formkit/auto-animate",
    "nuxt-seo-experiments",
  ],
  site: {
    url: "https://shyrogan.fr",
    name: "Sébastien VIAL",
  },
  app: {
    head: {
      templateParams: {
        separator: "-",
        // other common separators: '·', '—', '•'
      },
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          animation: {
            float: "float-animation 2s cubic-bezier(0.37, 0, 0.63, 1) infinite",
          },
          keyframes: {
            "float-animation": {
              "0%,100%": { transform: "translateY(-0.3rem)" },
              "50%": { transform: "translateY(0.3rem)" },
            },
          },
        },
      },
    },
  },
})
