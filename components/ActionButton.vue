<template>
  <button
    type="button"
    :style="{ fontSize: `${size ? size : 1}rem` }"
    :class="['add-notes-button', { 'active-button': isActive }]"
  >
    <slot />
  </button>
</template>
<script setup>
const props = defineProps({
  size: Number | String,
  isActive: Boolean,
});
</script>

<style scoped>
.add-notes-button {
  min-inline-size: 3em;
  min-block-size: 3em;
  padding: 0.5em;
  display: grid;
  place-items: center;
  background-color: var(--color-secundary);
  color: var(--color-primary);
  font-weight: 800;
  border: none;
  border-radius: 100vw;
  outline: 0.1em solid var(--color-secundary);
}

.add-notes-button {
  transition: all 200ms ease-in;
  cursor: pointer;
}

.add-notes-button:hover {
  background-color: var(--color-primary);
  color: var(--color-secundary);
}

.active-button {
  background-color: var(--color-primary);
  color: var(--color-secundary);
}

.active-button:hover {
  background-color: var(--color-secundary);
  color: var(--color-primary);
}
</style>
