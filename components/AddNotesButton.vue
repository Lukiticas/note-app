<template>
  <button type="button" class="add-notes-button" @click="handleClick">+</button>
</template>
<script setup>
const handleClick = () => {};
</script>
<style scoped>
.add-notes-button {
  font-size: 1.5rem;
  inline-size: 3rem;
  block-size: 3rem;
  display: grid;
  place-items: center;
  background-color: var(--color-primary);
  color: white;
  font-weight: 800;
  border: none;
  border-radius: 100vw;
  outline: 0.1rem solid black;
}
</style>
