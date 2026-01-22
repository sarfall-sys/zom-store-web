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
      //Lavender
      lavender: {
        50: '#f5f3ff', // Very light lavender
        100: '#ede9fe', // Light lavender
        200: '#ddd6fe', // Soft lavender
        300: '#c4b5fd', // Medium light lavender
        400: '#a78bfa', // Standard lavender
        500: '#8b5cf6', // Primary lavender
        600: '#7c3aed', // Deep lavender
        700: '#6d28d9', // Dark lavender
        800: '#5b21b6', // Very dark lavender
        900: '#4c1d95', // Deep purple lavender
      },
      // Complementary colors for lavender
      mint: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
      },
      // Neutral colors that work well with lavender
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      }
    }
  },
};
export const plugins = [];