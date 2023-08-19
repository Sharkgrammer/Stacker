module.exports = {
    darkMode: 'class',
    content: ["./index.html', './src/**/*.{vue,js,ts,jsx,tsx}"],
    purge: false,
    theme: {
        extend: {
            colors: {
                stackFor: '#30A2C8',
                stackBack: '#0143a2',
                stackGap: '#0067d0',
                darkBg: 'rgb(17 24 39)',
                lightBg: 'rgb(250, 248, 248)',
            },
        },
    },
    plugins: [],
};
