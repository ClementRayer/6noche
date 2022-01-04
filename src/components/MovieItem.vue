<template>
    <div id="movie-item">
        <div id="title">
            {{ title }}
        </div>
        <div id="note">
            {{ note }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'MovieItem',
  props: {
        title: {
            type: String,
            required: true
        },
        note: {
            type: Number,
            required: true
        },
        genre: {
            type: Array,
            required: true
        },
        cast: {
            type: Array,
            required: true
        },
        release: {
            type: Object,
            required: true
        },
        viewDate: {
            type: Object,
            required: true
        },
        isBanger: {
            type: Boolean,
            required: false
        }
  }
}
</script>

<style lang="scss">
#movie-item{
    font-family: 'Cormorant', serif;
    #title{
        font-size: 3em;
        font-weight: 300;
    }
    #note{
        font-size: 2.5em;
        font-weight: 600;
    }
}
</style>