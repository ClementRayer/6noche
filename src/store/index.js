import { createStore } from 'vuex'

export default createStore({
  state: {
    movies: [
      {
        title: 'Old Boy',
        note: 5,
        director: 'Park Chan-wook',
        genre: ['Action', 'Thriller'],
        cast: ['Choi Min-sik', 'Yu Ji-tae', 'Kang Hye-jeong'],
        release: {
          year: 2003,
          month: 11
        },
        viewDate: {
          year: 2022,
          month: 1,
          day: 13
        },
        coverPath: 'old-boy.jpg',
        isBanger: true
      },
      {
        title: 'Battle of the Sexes',
        note: 4,
        director: 'Dayton / Faris',
        genre: ['Biopic', 'Comédie'],
        cast: ['Emma Stone', 'Steve Carell', 'Andrea Riseborough'],
        release: {
          year: 2017,
          month: 9
        },
        viewDate: {
          year: 2022,
          month: 1,
          day: 12
        },
        coverPath: 'battle-of-the-sexes.jpg'
      },
      {
        title: 'Divergent',
        note: 1,
        director: 'Neil Burger',
        genre: ['Science-Fiction'],
        cast: ['Shailene Woodley', 'Theo James', 'Kate Winslet'],
        release: {
          year: 2014,
          month: 3
        },
        viewDate: {
          year: 2022,
          month: 1,
          day: 11
        },
        coverPath: 'divergent.jpg'
      },
      {
        title: 'Three Billboards Outside Ebbing, Missouri',
        note: 5,
        director: 'Martin McDonagh',
        genre: ['Drame'],
        cast: ['Frances McDormand', 'Woody Harrelson', 'Sam Rockwell'],
        release: {
          year: 2017,
          month: 11
        },
        viewDate: {
          year: 2022,
          month: 1,
          day: 9
        },
        coverPath: 'three-billboards.jpg',
        isBanger: true
      },
      {
        title: 'Under The Silver Lake',
        note: 4,
        director: 'David Robert Mitchell',
        genre: ['Thriller', 'Noir'],
        cast: ['Andrew Garfield', 'Riley Keough'],
        release: {
          year: 2018,
          month: 4
        },
        viewDate: {
          year: 2022,
          month: 1,
          day: 8
        },
        coverPath: 'under-the-silver-lake.jpg'
      },
      {
        title: 'The Green Knight',
        note: 5,
        director: 'David Lowery',
        genre: ['Fantastique', 'Historique'],
        cast: ['Dev Patel', 'Alicia Vikander'],
        release: {
          year: 2021,
          month: 7
        },
        viewDate: {
          year: 2022,
          month: 1,
          day: 7
        },
        coverPath: 'the-green-knight.jpg'
      },
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
    ],
    observations: [
      {
        date:{
          month: 1,
          day: 8
        },
        imagePath: 'into the spider-verse "great expecatations',
        content: "Après une semaine complète, mon sentiment est mitigé, mais globablement positif. Sans m'être réellement fixé d'objectif, l'idée originelle était de voir un film par jour, sans exception, durant toute l'année. Après avoir vu 7 films, dont 6 devait durer plus de deux heures, je remet sérieusement en doute cet objectif qui paraît bien plus lourd que prévu pour une telle durée. Ainsi, je pense donc viser plutôt 300 films vus dans l'année, ce qui me permettra de 'libérer' deux jours par semaine, ou d'avoir un matelas de sécurité. Si je prend pleinement conscience de la contrainte, je suis cependant ravi de me pousser à regarder des films, en évitant au maximum les revisionnages: j'ai découvert des films que j'aime beaucoup, dont un qui m'a fait une très forte impression et que je pense garder haut dans mon estime pour une longue période. Malgré le temps libre dont je dispose, j'en suis cependant déjà à chercher des films courts quand le choix est uniquement mien. Invariablement, je me suis jusqu'ici retrouvé chaque jour à regarder un film long mais dont je ne voyais pas passer les minutes, absorbé par leur qualité. Je vais peut-être m'habituer au rythme et ne pas avoir tant de difficulté que cela, mais j'appréhende sérieusement le moment où je ne serai pas conquis par plusieurs films de suite, j'espère ne pas flancher et tenir bon. Great expectations."
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
