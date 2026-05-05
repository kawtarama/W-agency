/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './sections/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0B0B',
        gold: '#D5A646',
        'gold-light': '#E9C684',
        porcelain: '#F8F8F8',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-poppins)', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 0 40px rgba(213, 166, 70, 0.24)',
        glass: '0 24px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E9C684 0%, #D5A646 45%, #7A5520 100%)',
        'radial-gold': 'radial-gradient(circle at center, rgba(213, 166, 70, 0.22), transparent 58%)',
      },
    },
  },
  plugins: [],
}
