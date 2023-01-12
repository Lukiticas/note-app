<template>
  <main>
    <section tag="section" id="notes" class="notes-list">
      <TransitionGroup name="note-list">
        <NoteBody
          v-for="note in notes"
          v-bind="note"
          :key="note.id"
          @delete-note="deleteNote"
        />
      </TransitionGroup>
    </section>
  </main>
</template>

<script setup>
import noteApp from "@/stores/index";

const { notes, deleteNote } = noteApp;
</script>

<style scoped>
.notes-list {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  max-width: 100%;
}

.note-list-move,
.note-list-enter-active,
.note-list-leave-active {
  transition: all 200ms ease;
  scale: 1;
}

.note-list-enter-from,
.note-list-leave-to {
  opacity: 0;
  scale: 0;
}

.note-list-leave-active {
  position: relative;
}
</style>
