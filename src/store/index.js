import { createStore } from 'vuex'

export default createStore({
  state: {
    movies: [
      {
        title: 'Cruella',
        note: 5,
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
        isBanger: true
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
