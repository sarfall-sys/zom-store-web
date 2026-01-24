/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
];
export const theme = {
    extend: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        colors: {
            primary: {
                50: "#f3fbea",
                100: "#e6f7d4",
                200: "#cdefa9",
                300: "#b4e77e",
                400: "#9bde54",
                500: "#82d629",
                600: "#68ab21",
                700: "#4e8118",
                800: "#345610",
                900: "#1a2b08",
                950: "#121e06"
            },
            // Complementary neutrals
            stone: {
                50: '#fafaf9',
                100: '#f5f5f4',
                200: '#e7e5e4',
                300: '#d6d3d1',
                400: '#a8a29e',
                500: '#78716c',
                600: '#57534e',
                700: '#44403c',
                800: '#292524',
                900: '#1c1917',
            },

            "petal-pink": {
                50: "#f8edf5",
                100: "#f0dbea",
                200: "#e1b7d6",
                300: "#d392c1",
                400: "#c46ead",
                500: "#b54a98",
                600: "#913b7a",
                700: "#6d2c5b",
                800: "#481e3d",
                900: "#240f1e",
                950: "#190a15"
            },
            "oxford-navy": {
                50: "#e8f1fd",
                100: "#d0e3fb",
                200: "#a1c6f7",
                300: "#72aaf3",
                400: "#438eef",
                500: "#1471eb",
                600: "#105bbc",
                700: "#0c448d",
                800: "#082d5e",
                900: "#04172f",
                950: "#031021"
            }


        }
    },
};
export const plugins = [];
