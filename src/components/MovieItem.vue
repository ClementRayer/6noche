<template>
    <div class="movie-item" :id="'movie-id-' + this.index">
        <div class="left">
            <img :src="getCoverLink(coverPath)" :alt="'Affiche du film ' + title" class="movie-cover">
        </div>
        <div class="right">
            <div class="details">
                <div class="title">
                    {{ title }}
                </div>
                <div class="note">
                    {{ note }} / 5
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieItem',
    props: {
        index: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        note: {
            type: Number,
            required: true
        },
        director: {
            type: String,
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
        coverPath: {
            type: String,
            required: true
        },
        isBanger: {
            type: Boolean,
            required: false
        }
    },
    methods:{
            getCoverLink(path) {
                return require('../assets/' + path)
            }
    },
    mounted() {
        if(!(this.index % 2)){
            let toggleClass = document.getElementById("movie-id-" + this.index);
            toggleClass.classList.add("movie-even");
            toggleClass.removeAttribute('id');
        }else{
            let toggleClass = document.getElementById("movie-id-" + this.index);
            toggleClass.removeAttribute('id');
        }
    }
}
</script>

<style lang="scss">
.movie-item{
    margin-bottom: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    .left{
        .movie-cover{
            width: 25vw;
        }
    }
    .right{
        margin-left: -2vw;
        .details{
            width: 15vw;
            color: #fae8e0;
            border: 1px solid #fae8e0;
            padding: 5vh 5vw;
            .title{
                font-size: 3em;
                font-weight: 700;
                font-style: italic;
            }
            .note{
                font-size: 2.5em;
                font-weight: 600;
            }
        }
    }
}
.movie-even{
    flex-direction: row-reverse;
    .left{
        margin-left: -2vw;
    }
    .right{
        margin-left: 0;
    }
}
// #0a2a36
</style>