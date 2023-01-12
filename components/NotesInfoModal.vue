<template>
  <section class="info-modal">
    <form @submit.prevent="handleSubmitNote" class="info-modal__form">
      <label class="info-modal__form--label" for="title-input">
        Title: <small>opcional</small></label
      >
      <input
        class="info-modal__form--input"
        id="title-input"
        type="text"
        placeholder="Write a nice title..."
        v-model="inputTitle"
      />
      <label class="info-modal__form--label" for="desc-input"> Write a note:</label>
      <textarea
        class="info-modal__form--input"
        id="desc-input"
        type="text"
        placeholder="Note goes here..."
        v-model="inputDesc"
        required
      />

      <ActionButton type="submit" size="1">Add note</ActionButton>
    </form>
  </section>
</template>

<script setup>
import notesApp from "@/stores/index";

const inputTitle = ref();
const inputDesc = ref();

const handleSubmitNote = () => {
  notesApp.addNote({
    title: inputTitle.value,
    description: inputDesc.value,
  });
};
</script>

<style scoped>
.info-modal {
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 9000;
}
.info-modal__form {
  display: flex;
  flex-direction: column;
  max-width: 25rem;

  padding: 1.5rem;
  border-radius: 1rem;
  gap: 1rem;
  outline: 0.1rem solid var(--color-secundary);

  background-color: var(--color-primary);
}

.info-modal__form > .info-modal__form--label + .info-modal__form--input {
  margin-block-end: 1rem;
}

.info-modal__form--label {
  font-size: 1.2rem;
}

.info-modal__form--input {
  background-color: #ffff;
  color: var(--color-secundary);
  font-size: 1rem;

  outline: 0.1rem solid var(--color-secundary);
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow: hidden;

  font-family: "roboto", sans-serif;
}

.info-modal__form--input:focus {
  outline-width: 0.2rem;
}

.info-modal__form--input:hover:not(:focus) {
  outline-width: 0.1rem;
  background-color: rgba(var(--color-secundary) 0);
}

small {
  font-size: 0.5rem;
}
</style>
