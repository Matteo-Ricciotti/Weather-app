/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'text-primary': 'rgb(36,55,116)'
			},
			boxShadow: {
				primary: '0 2px 10px 0 gray'
			},
			screens: {
				desktop: { min: '768px' }
			}
		}
	},
	plugins: []
};
