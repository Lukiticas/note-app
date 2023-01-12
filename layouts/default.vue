<template>
  <div class="app-wrapper">
    <HeaderMain />
    <slot />
  </div>
</template>

<style scoped>
.app-wrapper {
  max-width: 80rem;
  margin-inline: auto;
}
</style>
