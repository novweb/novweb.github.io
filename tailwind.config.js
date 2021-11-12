module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  separator: ':',
  important: false,
  prefix: '',
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['"Days One"'],
      'sans': ['Ubuntu'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
