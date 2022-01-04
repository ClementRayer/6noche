<template>
  <div id="content">
    <h1>Le 6noche</h1>
    <MovieItem
      v-for="item in movies"
      :title="item.title"
      :note="item.note"
      :genre="item.genre"
      :cast="item.cast"
      :release="item.release"
      :viewDate="item.viewDate"
      :isBanger="item.isBanger"
      :key="item.title"
    />
  </div>
</template>

<script>
import MovieItem from './components/MovieItem.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    MovieItem
  },
  computed: {
		...mapState({
			movies : 'movies'
		})
	},
}
</script>

<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css2?family=Petemoss&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
}
body {
  background-color: #0b0c1f;
  text-align: center;
  color: #ffffff;
  h1{
    font-family: 'Petemoss', cursive;
    font-size: 10em;
    font-weight: 400;
  }
}

</style>