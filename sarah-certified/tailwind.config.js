/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        'auto': 'auto',
      },
      // colors: {
      //   'primary-black': '#141921'
      // }
    },
  },
  // darkMode: "class",s
  plugins: [nextui({
    themes: {
      'dark': {
        extend: 'dark',
        colors: {
          background: '#141921',
          'primary-white': '#ffffff',
          'primary-black': '#000000',
          'secondary-blue': '#00cccc',
          'secondary-warm-orange': '#CC3606',
          'secondary-darker-bg': '#0699CC',
          'secondary-tone-green': '#06CC99',
          'secondary-magenta': '#CC06CC',
          'secondary-yg': '#CCCC06',
          'secondary-desat-teal': '#0FA5A5',

        }
        
      },
      'light': {
        extend: 'light',
        colors: {
          background: '#141921',
          'primary-white': '#ffffff',
          'primary-black': '#000000',
          'secondary-blue': '#00ffff',
          'secondary-red': '#0699CC'
        }
      }
    }
  })],
};
