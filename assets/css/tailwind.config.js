module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: [
      "./layouts/**/*.html"
      "./content/**/*.{html.md}"
      "./hugo.toml",
      "./assets/js/search.js",
      "./themes/blist/layouts/**/*.html",
      "./themes/blist/content/**/*.{html,md}",
    ],
  },
  darkMode: "class",
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              'code::before': {
                content: '""',
              },
              'code::after': {
                content: '""',
              },
            }
          ]
        },
        dark: {
          css: [
            {
              color: theme("colors.gray.400"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.stone"),
              },
              strong: {
                color: theme("colors.zinc"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.zinc"),
              },
              h2: {
                color: theme("colors.stone"),
              },
              h3: {
                color: theme("colors.zinc"),
              },
              h4: {
                color: theme("colors.stone"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.zinc"),
              },
              "a code": {
                color: theme("colors.amber"),
              },
              'code::before': {
                content: '""',
              },
              'code::after': {
                content: '""',
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui')
    ],
  daisyui: {
    themes: ['dark', 'cyberpunk', 'synthwave'],
  },
}
