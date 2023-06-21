import {fileURLToPath} from 'url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        target: 'esnext',
        polyfillDynamicImport: false,
    },
    server: {
        fs: {
            strict: false,
        },
    },
    plugins: [
        vue({
            reactivityTransform: true,
        }),
    ],
    base: '/',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
