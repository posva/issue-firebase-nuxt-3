<script lang="ts" setup>
import { getApp } from 'firebase/app'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const db = getFirestore(getApp())
const configRef = doc(db, 'configs', 'jORwjIykFo2NmkdzTkhU')

onServerPrefetch(async () => {
  const snapshot = await getDoc(configRef)
  console.log('got data once', snapshot.data()?.amount)
})
</script>

<template>
  <div>Hello</div>
</template>
