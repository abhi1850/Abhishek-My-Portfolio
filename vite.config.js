import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    host: '0.0.0.0',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime'),
        },
    },
});
