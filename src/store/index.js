import { createStore } from 'vuex'

export default createStore({
  state: {
    movies: [
      {
        title: 'The Favourite',
        note: 4,
        director: 'Yórgos Lánthimos',
        genre: ['Historique', 'Drame'],
        cast: ['Olivia Colman', 'Emma Stone', 'Rachel Weisz'],
        release: {
          year: 2018,
          month: 11
        },
        viewDate: {
          year: 2022,
          month: 1,
          day: 6
        },
        coverPath: 'the-favourite.jpg'
      },
      {
        title: 'I, Tonya',
        note: 4,
        director: 'Craig Gillespie',
        genre: ['Biographie', 'Drame'],
        cast: ['Margot Robbie', 'Sebastian Stan', 'Allison Janney', 'Allison Janney'],
        release: {
          year: 2017,
          month: 12
        },
        viewDate: {
          year: 2022,
          month: 1,
          day: 5
        },
        coverPath: 'i-tonya.jpg'
      },
      {
        title: 'Spy Kids',
        note: 1,
        director: 'Robert Rodriguez',
        genre: ['Aventure', 'Action'],
        cast: ['Alexa Vega', 'Daryl Sabara', 'Antonio Banderas', 'Carla Gugino'],
        release: {
          year: 2001,
          month: 3
        },
        viewDate: {
          year: 2022,
          month: 1,
          day: 4
        },
        coverPath: 'spy-kids.jpg'
      },
      {
        title: 'Cruella',
        note: 5,
        director: 'Craig Gillespie',
        genre: ['Comédie', 'Drame'],
        cast: ['Emma Stone', 'Emma Thompson', 'Mark Strong'],
        release: {
          year: 2021,
          month: 5
        },
        viewDate: {
          year: 2022,
          month: 1,
          day: 3
        },
        coverPath: 'cruella.jpg',
        isBanger: true
      },
      {
        title: 'La La Land',
        note: 5,
        director: 'Damien Chazelle',
        genre: ['Comédie musicale', 'Romance'],
        cast: ['Emma Stone', 'Ryan Gosling'],
        release: {
          year: 2016,
          month: 12
        },
        viewDate: {
          year: 2022,
          month: 1,
          day: 2
        },
        coverPath: 'lalaland.jpg',
        isBanger: true
      },
      {
        title: 'Crazy, Stupid, Love',
        note: 4,
        director: 'Glenn Ficarra',
        genre: ['Comédie', 'Romance'],
        cast: ['Steve Carrel', 'Julianne Moore' ,'Emma Stone', 'Ryan Gosling'],
        release: {
          year: 2011,
          month: 7
        },
        viewDate: {
          year: 2022,
          month: 1,
          day: 1
        },
        coverPath: 'crazy-stupid-love.jpg'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
