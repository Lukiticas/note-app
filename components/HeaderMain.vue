<template>
  <header class="header">
    <h1 class="header__heading-title">Notes</h1>
    <ActionButton @click="toggleModal" :isActive="isModalOpen">+</ActionButton>
    <Transition name="form-modal">
      <NotesInfoModal v-if="isModalOpen"></NotesInfoModal
    ></Transition>
  </header>
</template>

<script setup>
const isModalOpen = ref(false);
const toggleModal = () => (isModalOpen.value = !isModalOpen.value);
</script>

<style scoped>
.header {
  max-width: 100vw;
  min-height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-block: 1rem;
  position: relative;
}

.header__heading-title {
  font-size: 3rem;
  font-weight: 700;
}

.form-modal-enter-active,
.form-modal-leave-active {
  transition: opacity 0.5s ease;
}

.form-modal-enter-from,
.form-modal-leave-to {
  opacity: 0;
}
</style>
