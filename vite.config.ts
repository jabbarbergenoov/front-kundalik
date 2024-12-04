import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src', // Негізгі жұмыс папкасы
  build: {
    outDir: '../dist', // Құрастырылған файлдар шығатын папка
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'), // Негізгі HTML файлы
        signup: path.resolve(__dirname, 'src/signup.html'), // Signup беті
      },
    },
    emptyOutDir: true, // dist папкасын құрастыру алдында тазарту
  },
  server: {
    fs: {
      strict: false, // Файлдық жүйеге қолжетімділікті рұқсат ету
    },
    hmr: {
      overlay: true, // Қате болғанда хабарламаны көрсету
    },
  },
});
