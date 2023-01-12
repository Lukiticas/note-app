<template>
  <div class="app-wrapper">
    <HeaderMain />
    <slot />
  </div>
</template>

<style scoped>
.app-wrapper {
  max-width: clamp(30rem, 90vw, 75rem);
  margin-inline: auto;
}
</style>
