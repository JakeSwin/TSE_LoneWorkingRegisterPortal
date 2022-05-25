import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const defaultConfig = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
  globals: true,
  environment: 'happy-dom'
  }
}

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   },
//   server: {
//     proxy: {
//       "/backend": {
//         target: "https://cryptic-stream-90225.herokuapp.com",
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/backend/, "")
//       },
//       port: process.env.PORT || 3000
//     }
//   },
//   test: {
//     globals: true,
//     environment: 'happy-dom'
//   }
// })

export default defineConfig(({ command, mode }) => {
  if (command == 'serve') {
    const isDev = mode === 'development'

    return {
      ...defaultConfig,
      server: {
        proxy: {
          "/api": {
            target: "https://cryptic-stream-90225.herokuapp.com/api",
            changeOrigin: isDev,
            secure: !isDev,
            rewrite: (path) => path.replace(/^\/api/, "")
          }
        },
        port: process.env.PORT || 5000
      }
    }
  } else {
    return defaultConfig
  }
})