import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/UI/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        textDark: '#403F3D',
        textLight: '#E1D4C9',
        textAccent: '#B0907A',
        bgBody: '#E1D4C9',
        bgContainer: '#665F55',
        bgBackdrop: 'rgba(64, 63, 61, 0.8)',
        borderLight: '#C1B6AD',
        borderDark: '#665F55',
      },
      keyframes: {
        filling: {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translate(0)' },
        }
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
