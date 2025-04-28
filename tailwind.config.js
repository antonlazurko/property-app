/** @type {import {'tailwindcss'}.Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./assets/**/*.{css}"
    ],
    theme: {
        extend: {
            fontFamily:{
                sans: ['Public Sans', 'sans-serif'],
                serif: ['Public Serif', 'serif'],
            },
            gridTemplateColumns:{
                '70-30': '70% 28%'
            }
        }
    },
    plugins: []
}