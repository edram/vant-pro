<script setup>
// variable
const msg = 'Hello!';

// functions
function log() {
  console.log(msg);
}
</script>

<template>
  <button @click="log">{{ msg }}</button>
  <VanButton>123</VanButton>
</template>
