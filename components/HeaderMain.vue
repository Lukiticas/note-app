<template>
  <header class="header">
    <h1 class="header__heading-title">Notes</h1>
    <AddNotesButton />
  </header>
</template>

<style scoped>
.header {
  max-width: 100vw;
  min-height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__heading-title {
  font-size: 3rem;
  font-weight: 700;
}
</style>
