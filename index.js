class Heroi {
    constructor(nomeHeroi, idadeHeroi, tipoGuerreiro) {
      this.nomeHeroi = nomeHeroi
      this.idadeHeroi = idadeHeroi
      this.tipoGuerreiro = tipoGuerreiro
    }
  
    atacar(){
  
      if (this.tipoGuerreiro === "mago") {
        console.log(`o ${this.nomeHeroi} ${this.tipoGuerreiro} atacou usando Magia`)
      } else if (this.tipoGuerreiro === "guerreiro"){
        console.log(`o ${this.nomeHeroi} ${this.tipoGuerreiro} atacou usando Espada`)
      } else if (this.tipoGuerreiro === "monge") {
        console.log(`o ${this.nomeHeroi} ${this.tipoGuerreiro} atacou usando Artes marciais`)
      } else if (this.tipoGuerreiro === "ninja") {
        console.log(`o ${this.nomeHeroi} ${this.tipoGuerreiro} atacou usando Shuriken`)
      }
  
    }
  }
  
  let heroiJogo = new Heroi("Super", "18", "mago")
  
  heroiJogo.atacar()