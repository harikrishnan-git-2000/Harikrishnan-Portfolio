// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
    // Configure the paths to all of your template files
    content: [
        "./index.html",                     // Your main HTML file
        "./src/**/*.{js,ts,jsx,tsx}",      // All JS/TS/JSX/TSX files in the src folder
        // Add other paths if you have components/templates elsewhere
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            // You can add custom theme extensions here later if needed
            // e.g., custom colors, fonts, breakpoints
        },
    },
    // Add the plugins you want to use
    plugins: [
        require('@tailwindcss/typography'), // **This is the crucial line**
        // Optional: Add the scrollbar plugin if you installed it
        require('tailwind-scrollbar'),
    ],
    // Optional: If using the scrollbar plugin, you might need variants
    variants: {
        extend: {
            scrollbar: ['dark', 'rounded']
        }
    }
}