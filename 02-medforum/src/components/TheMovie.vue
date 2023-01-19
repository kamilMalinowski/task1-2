<template>
  <video class="gap" controls>
    <source :src="src" type="video/mp4" />
    Sorry, your browser doesn't support embedded videos.
  </video>
</template>

<script>
export default {
  props: ["src"],
};
</script>

<style lang="scss" scoped>
video {
  opacity: 0;
  height: 0;
  pointer-events: none;
  display: flex;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  border: 0 solid;
  border-radius: 8px;
  width: 100%;
}

.open {
  border: 4px solid;
  border-color: var(--c-30) var(--c-30) var(--c-10) var(--c-10);
  margin-top: 1rem;
  height: auto;
  opacity: 1;
  pointer-events: auto;
}
</style>
