import { getApps, initializeApp } from 'firebase/app'
import { defineNuxtPlugin, useAppConfig } from '#app'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import { connectDatabaseEmulator, getDatabase } from 'firebase/database'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('initializing firebase app')
  const firebaseApp = initializeApp({
    apiKey: 'AIzaSyAkUKe36TPWL2eZTshgk-Xl4bY_R5SB97U',
    authDomain: 'vue-fire-store.firebaseapp.com',
    databaseURL: 'https://vue-fire-store.firebaseio.com',
    projectId: 'vue-fire-store',
    storageBucket: 'vue-fire-store.appspot.com',
    messagingSenderId: '998674887640',
    appId: '1:998674887640:web:1e2bb2cc3e5eb2fc3478ad',
    measurementId: 'G-RL4BTWXKJ7',
  })
  console.log('initialized app', getApps().length)
})
