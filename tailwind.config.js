/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            '4xl': { 'max': '1500px' },
            '3xl': { 'max': '1446px' },
            '2xl': { 'max': '1219px' },
            'xl': { 'max': '980px' },
            'lg': { 'max': '816px' },
            'md': { 'max': '520px' },




        },
        extend: {},
    },
    plugins: [],
}