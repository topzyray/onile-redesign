/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home_hero': 'url("/assets/hero_bg.gif")',
        'home_hero': 'url("/assets/hero_bg.gif")'
      },
      colors: {
        'light-orange': '#FF7F50',
        'dark-orange': '#FC6832',
        'dark-gray': '#344054',
        'light-gray': '#344054B2',
        'dark-blue': '#1D2939'
      },
      fontFamily: {
        'roboto': ['Roboto', 'Lato', 'sans-serif'],
        'lato': ['Lato', 'Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}