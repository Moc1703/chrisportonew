/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm near-black surfaces (editorial dark)
        base: {
          900: '#050504', // page base
          800: '#0a0a09', // raised
          700: '#121110', // panel
          600: '#1a1917',
          border: '#1c1b18', // hairline divider
          light: '#2a2824',  // stronger divider / muted border
        },
        // Warm ink (off-white, not sterile pure white)
        ink: {
          50: '#f5f3ef',  // primary display
          100: '#e6e3dd', // body strong
          200: '#a8a49b', // body
          300: '#6f6c65', // muted meta
          400: '#45433e', // faint
        },
        // Warm cream accent
        accent: {
          DEFAULT: '#e7dcc7',
          muted: '#b9ad95',
        },
        brand: {
          DEFAULT: '#f5f3ef',
          hover: '#e6e3dd',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'display': '-0.03em',
      },
      fontSize: {
        // Fluid editorial display scale
        'display-sm': ['clamp(2.25rem, 5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(3rem, 7vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(3.5rem, 10vw, 8rem)', { lineHeight: '0.98', letterSpacing: '-0.04em' }],
      },
      animation: {
        'pulse-soft': 'pulseSoft 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)', filter: 'blur(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
