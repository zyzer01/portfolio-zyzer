import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
      },
      fontFamily: {
        manrope: ['var(--font-manrope)'],
        proggy: ['var(--font-proggy)'],
      },
      filter: {
        glowBlur: 'blur(20px)', 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#ED1E79',
        secondary: '#662D8C',
        bright: '#FEFEFE',
        shade: '#8D8D8D',
        cloudnetvox: '#06155A',
        lubesurgeons: '#FF9F15',
        ruachost: '#14E6C5',
      },
    },
  },
  plugins: [],
};
export default config;
