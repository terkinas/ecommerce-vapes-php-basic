const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
              keyframes: {
                float: {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-2%)' },
                }
              },
               
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
