export default class pokemon {
    constructor (name) {
      this.name = name
    }
  
    sayHello (message) {
      console.log(`[${this.name}]`)
    }
  }