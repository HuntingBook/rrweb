import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        react(),
        dts({
            include: ['src'],
            insertTypesEntry: true
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'RRWebReactKit',
            fileName: 'index'
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'rrweb'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    rrweb: 'rrweb'
                }
            }
        }
    }
});
