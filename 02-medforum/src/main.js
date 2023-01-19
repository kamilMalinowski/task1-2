import { createApp } from 'vue'
import App from './App.vue'

import IconPlayMovie from './components/icons/IconPlayMovie.vue'

const app = createApp(App)

app.component('icon-play-movie', IconPlayMovie)

app.mount('#app')
