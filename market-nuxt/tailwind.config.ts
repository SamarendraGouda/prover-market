/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            borderRadius: {
                5: '20px',
                5.5: '25px',
                10: '40px',
                7.5: '30px',
            },
            colors: {
                gri: {
                    750: '#2B323F',
                    850: '#161E2D',
                    950: '#090D14',
                },
            },
        }
    }
}