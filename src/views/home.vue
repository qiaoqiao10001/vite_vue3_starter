<template>
  <div>
    {{ store.count }}
    <button @click="store.increment">+</button>
    {{ store.double }}
  </div>
</template>

<script setup>
import axios from '../utils/axios'
import { useUserStore } from '../store/modules/user.ts'
const defineProps = defineProps({})
let store = useUserStore()
const emits = defineEmits([])
console.log(useUserStore())
axios.get('/users/xPoet').then((res) => {
  console.log(res)
})
</script>

<script></script>

<style lang="scss"></style>
