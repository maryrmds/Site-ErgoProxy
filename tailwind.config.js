/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
  
      colors: {
      
        slate: colors.slate,
  
      },

      fontFaily: {
        'jacquard': '"Jacquard 12 Charted"',
      }
  
    },
    
    plugins: [],
  }