/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "custom-color-01": {
          100: '#fafaff',
          200: '#66347F',
          300: '#865DFF'
        },

        "custom-color-02": {
          100: "#7461E2",
          200: '#6D29D5',
          300: '#FFC800',
        }
      },

      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
        "ubuntu": ['Ubuntu', "sans-serif"]
      }
    },
  },
  plugins: [],
}

