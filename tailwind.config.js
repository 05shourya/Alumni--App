import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	daisyui: {
		themes: ['bumblebee', 'dark', 'cupcake', 'forest', 'black', 'coffee', 'sunset']
	},
	theme: {
		extend: {},
	},
	plugins: [daisyui],
}

