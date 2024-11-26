module.exports = {
  // Content purging configuration
  content: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: [
      "./layouts/**/*.html",
      "./content/**/*.{html,md}",
      "./hugo.toml",
      "./assets/js/search.js",
      "./themes/blist/layouts/**/*.html",
      "./themes/blist/content/**/*.{html,md}",
    ],
  },

  // Dark mode configuration
  darkMode: "class",
  darkMode: "media",

  // Theme configuration
  theme: {
    extend: {
      // Custom font families
      fontFamily: {
        'wassail': ['Wassail', 'sans-serif'],
        'chillight': ['Chillight', 'sans-serif'],
        'occult-overture': ['Occult Overture', 'sans-serif'],
        'vanila': ['Vanila', 'sans-serif'],
      },

      // Typography configuration
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              'code::before': { content: '""' },
              'code::after': { content: '""' },
            }
          ]
        },
        dark: {
          css: [
            {
              color: theme("colors.gray.400"),
              a: { color: theme("colors.stone.500") },
              strong: { color: theme("colors.zinc.500") },
              hr: { borderColor: theme("colors.gray.600") },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: { color: theme("colors.emerald.500") },
              h2: { color: theme("colors.stone.500") },
              h3: { color: theme("colors.zinc.500") },
              h4: { color: theme("colors.stone.500") },
              code: { color: theme("colors.zinc.500") },
              "a code": { color: theme("colors.emerald.500") },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.gray.300"),
                borderBottomColor: theme("colors.gray.600"),
              },
              "tbody tr": { borderBottomColor: theme("colors.gray.700") },
            },
          ],
        },
      }),
    },
  },

  // Variant extensions
  variants: {
    extend: {
      typography: ["dark"],
    },
  },

  // Plugins
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui')
  ],

  // DaisyUI configuration
  daisyui: {
    themes: ['dark', 'cyberpunk', 'synthwave'],
  },
}