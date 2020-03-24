
var app = new Vue({
  el: "#app",
  data: {

    /*Achille: {
      nome: "Achille",
      totale: 7,
      punteggio: 0
    },

     Ettore: {
      nome: "Ettore",
      totale: 21,
      punteggio: 0
    },

    Paride: {
      nome: "Paride",
      totale: 14,
      punteggio: 0
    },

    Aiace: {
      nome: "Aiace",
      totale: 3,
      punteggio: 0
    },

    giocatori: [Achille, Ettore, Paride, Aiace] */

    secondi: 0
    
  },
  created(){
    setInterval(()=>{
      this.secondi++;
    }, 1000);
  }
 
});


