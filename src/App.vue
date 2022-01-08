<template>
  <div id="content">
    <div id="title">
      <h1>Le 6noche</h1>
      <p id="subtitle">Les avis cinématographiques innoportuns d'un inculte cuistre.</p>
    </div>
    <div id="movies">
      <MovieItem
        v-for="(item, index) in movies"
        :index="index + 1"
        :title="item.title"
        :note="item.note"
        :director="item.director"
        :genre="item.genre"
        :cast="item.cast"
        :release="item.release"
        :viewDate="item.viewDate"
        :coverPath="item.coverPath"
        :isBanger="item.isBanger"
        :key="item.title"
      />
    </div>
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
  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
}
body {
  margin: 0;
  background-color: #fae8e0;
  color: #0b0c1f;
  text-align: center;
  font-family: 'Cormorant Infant', serif;
  overflow-x: hidden;
  #content{
    display: flex;
    flex-direction: column;
    align-items: center;
    #title{
      margin: 10vh 0 15vh 0;
      h1{
        margin: 0;
        font-family: 'Bodoni Moda', serif;
        font-size: 10rem;
      }
      #subtitle{
        margin: 0;
        font-family: 'Petemoss', cursive;
        font-size: 3rem;
      }
    }
    #movies{
      width: 100vw;
      padding: 5vh 0;
      background-color: #0a2a36;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}

</style>