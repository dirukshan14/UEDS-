import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        greenDeep: '#1f3d2b',
        greenMid: '#3c5d45',
        sage: '#8ca38f',
        gold: '#c48a3e',
        maroon: '#7a3226',
        paper: '#f6f2e9',
        paperDim: '#efe9db',
        ink: '#22201b',
        inkSoft: '#524d41',
        line: '#d9d2bf'
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Work Sans', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
