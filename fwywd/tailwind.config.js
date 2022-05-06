// tailwind.config.js
module.exports = {
  // 追記
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}', ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#59d3d4',
          base: '#06bbbc',
          DEFAULT: '#06bbbc',
          dark: '#008c8d',
          lightest: '#9ebeb',
        },
        // 'カラー名': 'カラーコード'
        'dark-green': '#06bbbc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};