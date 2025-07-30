import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/todolist.pugdev/', // 👈 nombre exacto del repo
})
