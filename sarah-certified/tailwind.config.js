/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
        }
        
      },
      'light': {
        extend: 'light',
        colors: {
          background: '#141921',
          'primary-white': '#ffffff',
          'primary-black': '#000000',
          'secondary-blue': '#00ffff',
        }
      }
    }
  })],
};
