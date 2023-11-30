import terser from "@rollup/plugin-terser";
import { defineConfig } from "rollup";

/**@type {import("@rollup/plugin-terser").Options}*/
const terserConfig = {
    ecma: 5,
    compress: {
        //drop_console: true,
    },
    ie8: true,
    safari10: true
};
export default defineConfig([
    {
        input: "src/export.esm.js",
        output: {
            file: 'dist/websys.esm.js',
    		format: "esm",
            compact: true,
            plugins: [terser(terserConfig)],
        }
    },
    {
        input: "src/export.esm.js",
        output: {
            file: 'dist/websys.dev-esm.js',
    		format: "esm"
        }
    },
    {
        input: "src/export.global.js",
        output: {
            file: 'dist/websys.global.js',
    		format: "iife",
            compact: true,
            plugins: [terser(terserConfig)],
        }
    },
    {
        input: "src/export.global.js",
        output: {
            file: 'dist/websys.dev-global.js',
    		format: "iife"
        }
    }
]);