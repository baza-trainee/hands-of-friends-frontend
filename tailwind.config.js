/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		extend: {
			fontFamily: {
				body: ['ptSans', 'sans-serif'],
				// heading: ['bloggerSans', 'sans-serif'],
			},
			colors: {
				deepBlue: '#0082CA',
				vividBlue: '#01A0E2',
				lightBlue: '#D8F3FF',
				purple: '#3F3493',
			},
		},
    screens: {
      xs: '320px',
      sm: '420px',
      lg: '1024px',
    }
	},
  plugins: [],
}
