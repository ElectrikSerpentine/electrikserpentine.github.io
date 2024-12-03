/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./assets/js/*.js",
    "./assets/css/*.css"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        dark: {
          slate: {
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          },
          zinc: {
            800: '#27272a',
            900: '#18181b',
            950: '#09090b',
          },
          stone: {
            800: '#292524',
            900: '#1c1917',
            950: '#0c0a09',
          },
          indigo: {
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81',
            950: '#1e1b4b',
          },
          fuchsia: {
            900: '#701a75',
          },
          pink: {
            600: '#db2777',
          },
        },
      },
      fontFamily: {
        astroviz: ['"Astroviz"', 'sans-serif'],
        chillight: ['"chillight"', 'sans-serif'],
        occultOverture: ['"Occult Overture"', 'sans-serif'],
        vanila: ['Vanila', 'sans-serif'],
        wassail: ['wassail', 'sans-serif'],
        wassailnumbers: ['wassailnumbers', 'sans-serif'],
      },
      typography: (theme) => ({
        dark: {
          css: [
            {
              'code::before': { content: '""' },
              'code::after': { content: '""' },
            },
          ],
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            '[class~="lead"]': { color: theme('colors.gray.400') },
            a: { color: theme('colors.gray.100') },
            strong: { color: theme('colors.gray.100') },
            'ul > li::before': { backgroundColor: theme('colors.gray.700') },
            hr: { borderColor: theme('colors.gray.800') },
            blockquote: {
              color: theme('colors.gray.100'),
              backgroundColor: theme('colors.gray.800'),
            },
            h1: { color: theme('colors.gray.100') },
            h2: { color: theme('colors.gray.100') },
            h3: { color: theme('colors.gray.100') },
            h4: { color: theme('colors.gray.100') },
            code: { color: theme('colors.gray.100') },
            'a code': { color: theme('colors.gray.100') },
            pre: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.800'),
            },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.700'),
            },
            'tbody tr': { borderBottomColor: theme('colors.gray.800') },
          },
        },
      }),
    },
  },
  variants: {
    extend: { typography: ['dark'] },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
        'synthwave', 
        'cyberpunk', 
        'dark',
        'dracula',
        ],
    },
};
