class MakeShow {
  constructor(showName,epLength,genre,leadActors,isBingeWorthy){
    this.show = showName
    this.runtime = epLength
    this.leads = leadActors
    this.binge = isBingeWorthy
    this.genre = genre
  }
    play(){
      console.log('Now Playing')
    }
    stop(){
      console.log('Are you still watching?')
    }
  }

let lupin = new MakeShow('Lupin',60,'drama',["dude1","dude2","lady1"],true)

console.log(lupin)