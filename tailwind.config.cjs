/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat'],
			},
			colors: {
				'dark-gray': '#272829',
				'medium-gray': '#61677A',
				'light-gray': '#D8D9DA',
				'light-yellow': '#FFF6E0',
			},
		},
	},
	plugins: [],
}
