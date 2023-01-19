<template>
  <section class="section">
    <ul>
      <li v-for="(movie, index) in moviesArr" :key="movie.id">
        <section class="wrapper">
          <button @click="openMovie(index, movie.link)">
            <icon-play-movie></icon-play-movie>
          </button>
          <h3>{{ movie.title }}</h3>
          <span>{{ movie.duration }}</span>
        </section>
        <the-movie
          @play="PlayVideo(index)"
          :src="movie.link"
          :id="index"
        ></the-movie>
      </li>
    </ul>
  </section>
</template>

<script>
import TheMovie from "./TheMovie.vue";
export default {
  components: {
    TheMovie,
  },
  data() {
    return {
      isVisible: false,
      moviesArr: [],
    };
  },
  methods: {
    async fetchingData() {
      const response = await fetch("/movies.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const movies = [];
      for (let repo of data) {
        const { id, title, duration, link } = repo;
        movies.push({
          id: id,
          title: title,
          duration: duration,
          link: link,
        });

        this.moviesArr = movies;
      }
    },

    openMovie(ind) {
      const video = document.querySelectorAll("video");
      const play = document.getElementById(`${ind}`);
      video.forEach((el) => {
        el.classList.remove("open");
      });
      play.classList.add("open");
      play.play();
    },

    PlayVideo(ind) {
      const vid = document.getElementById(`${ind}`);

      const interval = setInterval(() => {
        if (vid.currentTime.toFixed() <= 1)
          console.log(`%cpoczątek filmu nr: ${ind + 1}`, 'color:green');
        if (vid.currentTime.toFixed() == Math.floor(vid.duration.toFixed() / 2))
          console.log(`%cśrodek filmu nr: ${ind + 1}`, 'color:orange');
        if (vid.currentTime.toFixed() == vid.duration.toFixed()) {
          console.log(`%ckoniec filmu nr: ${ind + 1}`, 'color:red');
          clearInterval(interval);
        }
      }, 1000);
    },
  },
  mounted() {
    this.fetchingData();
  },
};
</script>

<style lang="scss" scoped>
$gradient: linear-gradient(
  45deg,
  rgba(63, 109, 158, 0.3),
  rgba(247, 131, 175, 0.3)
);

.section {
  width: 100%;
}

ul {
  margin: 0 auto;
  max-width: 768px;
  width: 100%;
  display: grid;
  grid-gap: 3rem;
  padding: 3rem;
}

li {
  transform: scale(1) rotate(0);
  transition: all 0.4s;
  border-radius: 8px;
  background-image: $gradient;
  border: 4px solid;
  border-color: var(--c-30) var(--c-30) var(--c-10) var(--c-10);
  padding: 1rem;
  animation: shake2 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.wrapper {
  display: grid;
  align-items: center;
  grid-template-columns: 40px 1fr 50px;
  grid-template-rows: 1fr;
}

h3 {
  color: var(--c-10);
  font-weight: var(--fw-bold);
  font-size: 2rem;
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 1rem;
}

span {
  display: block;
  margin: 0 0 0 auto;
  font-size: 1.2rem;
  font-weight: var(--fw-normal);
  color: var(--c-light);
}

button {
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s;
  transform: scale(0.9);
  &:hover {
    animation: shake 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    filter: hue-rotate(180deg);
  }
}

@keyframes shake {
  0% {
    transform: scale(1) rotate(0);
    filter: hue-rotate(360deg);
  }
  50% {
    transform: scale(1) rotate(36deg);
  }
  100% {
    transform: scale(0.9) rotate(0);
  }
}

@keyframes shake2 {
  0% {
    transform: scale(1) rotate(0);
    filter: hue-rotate(360deg);
  }
  50% {
    transform: scale(1.05) rotate(1deg);
  }
  100% {
    transform: scale(1) rotate(0);
  }
}
</style>
