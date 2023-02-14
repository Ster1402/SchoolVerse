/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{html,js,tsx,ts}',
    './src/components/**/*.{html,js,tsx,ts}',
    './src/containers/**/*.{html,js,tsx,ts}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1000px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        pattern: "url('./assets/images/pattern.svg')",
        hat: "url('./assets/images/hat.svg')"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '0rem',
          xl: '0rem',
          '2xl': '0rem',
        },
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',

        // Complex site-specific row configuration
        layout: '200px minmax(900px, 1fr) 100px',
      },
      colors: {
        white: '#ffffff',
        primary: '#204D52',
        secondary: '#C4FCDC',
        'app-green': '#008100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
};
