<template>
    <div class="movie-item" :id="'movie-' + this.index">
        <div class="left" :id="'cover-' + this.index" @mouseover="basicHover" @mouseleave="basicHoverOut">
            <img :src="getCoverLink(coverPath)" :alt="'Affiche du film ' + title" class="movie-cover">
        </div>
        <div class="right" :id="'panel-' + this.index" @mouseover="basicHover" @mouseleave="basicHoverOut">
            <div class="details">
                <div class="details-hidden details-first-line">
                    <div>{{ director }}</div>
                    <div>{{ release.year }}</div>
                </div>
                <div class="title">
                    {{ title }}
                </div>
                <div class="details-hidden">
                    <!-- Faire étoile en svg pour animation -->
                    <div>⭐ {{ note }} / 5</div> 
                    <button class="details-btn"> Détails</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import anime from "animejs";

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
    methods: {
        getCoverLink(path) {
            return require('../assets/' + path)
        },
        getAnimationTarget(target) {
            if(target === 'cover'){
                // eslint-disable-next-line no-unused-vars
                return '#cover-' + this.index;
            }else if(target === 'panel'){
                // eslint-disable-next-line no-unused-vars
                return '#panel-' + this.index;
            }
        },
        getAnimationOffset(){
            return (document.documentElement.clientWidth / 100) * 2
        },
        basicHover(){
            if(!(this.index % 2)){
                anime
                    .timeline({
                        duration: 200,
                        easing: 'easeInSine'
                    })
                    .add({
                        targets: this.getAnimationTarget('panel'),
                        translateX: `-${this.getAnimationOffset()}`,
                    })
                    .add({
                        targets: this.getAnimationTarget('cover'),
                        translateX: this.getAnimationOffset(),
                    }, 0)
            }else{
                anime
                    .timeline({
                        duration: 200,
                        easing: 'easeInSine'
                    })
                    .add({
                        targets: this.getAnimationTarget('panel'),
                        translateX: this.getAnimationOffset(),
                    })
                    .add({
                        targets: this.getAnimationTarget('cover'),
                        translateX: `-${this.getAnimationOffset()}`,
                    }, 0)
            }
            anime
                .timeline({
                    duration: 250,
                    easing: 'easeInSine'
                })
                .add({
                    targets: `${this.getAnimationTarget('panel')} .details`,
                    backgroundColor: '#fae8e0',
                    color: '#0a2a36'
                })
                .add({
                    targets: `${this.getAnimationTarget('panel')} .details-hidden`,
                    opacity: 1,
                }, 0)
        },
        basicHoverOut(){
            anime
                .timeline({
                    duration: 200,
                    easing: 'easeInSine'
                })
                .add({
                    targets: this.getAnimationTarget('panel'),
                    translateX: 0,
                })
                .add({
                    targets: this.getAnimationTarget('cover'),
                    translateX: 0,
                }, 0)
            anime
                .timeline({
                    duration: 250,
                    easing: 'easeInSine'
                })
                .add({
                    targets: `${this.getAnimationTarget('panel')} .details`,
                    backgroundColor: 'rgba(10, 42, 54, 0)',
                    color: '#fae8e0'
                })
                .add({
                    targets: `${this.getAnimationTarget('panel')} .details-hidden`,
                    opacity: 0,
                }, 0)
        }
        // SI banger, mettre l'animation dans la base de données et l'appeler en mode if(this.isBanger === true) {this.isbanger.animation}
    },
    mounted() {
        if(!(this.index % 2)){
            let toggleClass = document.getElementById("movie-" + this.index);
            toggleClass.classList.add("movie-even");
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
            width: 18vw;
            border-radius: 2px;
            font-size: 2.5rem;
            font-weight: 600;
            color: #fae8e0;
            border: 1px solid #fae8e0;
            padding: 5vh 4vw;
            .title{
                margin: 2vh 0;
                font-size: 3.5rem;
                font-weight: 700;
                font-style: italic;
            }
            .details-hidden{
                width: 100%;
                font-size: 1.5rem;
                opacity: 0;
                display: flex;
                justify-content: space-between;
                .details-btn{
                    border-radius: 3px;
                    padding: 5px 10px;
                    background: #0a2a36;
                    font-family: 'Cormorant Infant', serif;
                    font-size: 1.5rem;
                    font-weight: 500;
                    font-style: italic;
                    color: #fae8e0;
                    border: none;
                    cursor: pointer;
                }
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
</style>