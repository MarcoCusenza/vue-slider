// +++ CONTENUTI +++

const app = new Vue({
  el: "#root",
  data: {
    elements: [
      {
        image: "img/01.jpg",
        title: "Svezia",
        subtitle: "Che bella la Svezia"
      },
      {
        image: "img/02.jpg",
        title: "Svizzera",
        subtitle: "Che bella la Svizzera",
      },
      {
        image: "img/03.jpg",
        title: "Gran Bretagna",
        subtitle: "Che bella la Gran Bretagna",
      },
      {
        image: "img/04.jpg",
        title: "Germania",
        subtitle: "Che bella la Germania",
      },
      {
        image: "img/05.jpg",
        title: "Paradise",
        subtitle: "Che bella la Paradise",
      },
    ],
    // PROPRIETA
    indexFocus: 0,
    autoPlay: 0,
  },
  methods: {
    isActive: function (i) {
      if (this.indexFocus == i) {
        return true;
      }
      return false;
    },

    goUp: function () {
      if (this.indexFocus > 0) {
        return this.indexFocus--;
      }
      this.indexFocus = this.elements.length - 1;
    },

    goDown: function () {
      if (this.indexFocus < this.elements.length - 1) {
        return this.indexFocus++;
      }
      this.indexFocus = 0;
    },

    cicloActive: function () {
      this.autoPlay = setInterval(function () {
        app.goDown();
      }, 1000);
    },

    blockCicloActive: function () {
      clearInterval(this.autoPlay);
    },
  },

  created: function () {
    this.cicloActive();
  },
});

