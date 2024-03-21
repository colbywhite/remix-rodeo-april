import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    base: '/remix-rode-april/',
    plugins: [
        remix({
            basename: '/remix-rode-april/',
            ssr: false
        }),
        tsconfigPaths()
    ]
});
