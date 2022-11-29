import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const nodeModules = fileURLToPath(new URL('./node_modules', import.meta.url))

export default defineNuxtConfig({
  // NOTE: uncomment to workaround the problem
  // hooks: {
  //   // cannot be added in nuxt's resolve.alias
  //   'vite:extendConfig': (config, { isServer }) => {
  //     if (isServer) {
  //       config.resolve ??= {}
  //       config.resolve.alias ??= {}
  //       // @ts-ignore
  //       config.resolve.alias['firebase/firestore'] = resolve(
  //         nodeModules,
  //         'firebase/firestore/dist/index.mjs'
  //       )
  //       // @ts-ignore
  //       config.resolve.alias['@firebase/firestore'] = resolve(
  //         nodeModules,
  //         '@firebase/firestore/dist/index.node.mjs'
  //       )
  //     }
  //   },
  // },
})
