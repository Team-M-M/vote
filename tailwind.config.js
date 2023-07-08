//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    '**/pages/**/*.{js,ts,jsx,tsx,mdx}',
    '**/components/**/*.{js,ts,jsx,tsx,mdx}',
    '**/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['SCoreDream', 'system-ui', 'sans-serif'],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      fontSize: {
        '2xs': '10px',
      },
      colors: {
        bible: '#2AC1BC',
        img: '#FFC8A2',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/line-clamp')
  ],

};

