<template>
  <the-movie-list></the-movie-list>
</template>

<script>
import TheMovieList from "./components/TheMovieList.vue";

export default {
  components: {
    TheMovieList,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap");

:root {
  --c-dark: #151640;
  --c-light: #ffffff;

  --fw-normal: 400;
  --fw-bold: 700;

  --c-60: #e6f2ef;
  --c-30: #3f6d9e;
  --c-10: #f783b0;

  --background: linear-gradient(
      45deg,
      rgba(21, 22, 65, 0.9),
      rgba(21, 22, 64, 0.7)
    ),
    url("/movie-bg.jpg");
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

body #app {
  box-sizing: border-box;
  font-size: 1.6rem;
  width: 100%;
  color: var(--c-dark);
  font-family: "Nunito", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: stretch;
  min-height: 100vh;
  background: var(--background);
  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
}
</style>
