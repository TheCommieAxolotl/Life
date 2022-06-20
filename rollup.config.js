export default [
    {
        input: "./src/index.mjs",
        output: {
            file: "./dist/cjs/index.cjs",
            format: "cjs",
            compact: true,
        },
    },
    {
        input: "./src/index.mjs",
        output: {
            file: "./dist/mjs/index.mjs",
            format: "esm",
            compact: true,
        },
    },
];
