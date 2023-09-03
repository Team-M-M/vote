/**
 * @type {Record<string, string[]>}
 * @example
 * {
 *  '0': ['0px'],
 * '1': ['1px'],
 * }
 */
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

// before -> <div className="p-[8px] h-[35px] text-[12px] border-[2px] rounded-[5px]"></div>
// after  => <div className="p-8 h-35 text-12 border-2 rounded-5">

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    '**/pages/**/*.{js,ts,jsx,tsx,mdx}',
    '**/components/**/*.{js,ts,jsx,tsx,mdx}',
    '**/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Pretendard', 'system-ui', 'sans-serif'],
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
        main: '#3182f6',
      },
      // borderWidth: px0_10,
      // fontSize: px0_100,
      // lineHeight: px0_100,
      // minWidth: px0_200,
      // minHeight: px0_200,
      // spacing: px0_200,
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
