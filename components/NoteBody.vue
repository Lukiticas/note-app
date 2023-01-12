<template>
  <article class="note-body">
    <span class="note-body__title" v-if="title">{{ title }}</span>
    <p class="note-body__description">{{ description }}</p>

    <div class="note-delete-button__wrap">
      <ActionButton
        @click="$emit('delete-note', id)"
        :size="0.8"
        class="note-delete-button"
        >-</ActionButton
      >
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  title: String,
  id: { type: String, required: true },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.note-body {
  min-width: 10rem;
  max-width: 15rem;
  max-height: 15rem;

  padding: 1rem;
  border-radius: 1rem;

  background-color: red;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
}

.note-body__title {
  font-size: 1.2rem;
  font-weight: 800;
  max-width: 100%;
  word-wrap: nowrap;
  text-overflow: ellipsis;
}

.note-body__description {
  text-justify: distribute;
  word-wrap: break-word;
}

.note-delete-button__wrap {
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;

  visibility: hidden;
  opacity: 0;
  transition: all 200ms ease-in;
}

.note-body:hover {
  transform: translate(0.3rem, 0.3rem);
}

.note-body:hover .note-delete-button__wrap {
  visibility: visible;
  opacity: 1;
}
</style>
