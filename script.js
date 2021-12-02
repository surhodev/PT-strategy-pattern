class Duck {

  quackStrategy = null
  flyStrategy = null

  /**
   * Shipping constructor
   * @param {*} calulateStrategy : Need to contains a calculate method
   */
  constructor({ quackStrategy, flyStrategy }) {
    this.quackStrategy = quackStrategy
    this.flyStrategy = flyStrategy
  }

  quack() {
    return this.quackStrategy.quack()
  }

  fly() {
    return this.flyStrategy.fly()
  }
}

const SimpleQuackStrategy = {
  quack: () => {
    return "I'm a little duck :)"
  }
}

const LoudQuackStrategy = {
  quack: () => {
    return "I'M A LITTLE DUCK AHAHA"
  }
}

const SmallFlyStrategy = {
  fly: () => {
    return 5
  }
}

const FarFlyStrategy = {
  fly: () => {
    return 350
  }
}

const littleDuck = new Duck({
  quackStrategy: SimpleQuackStrategy,
  flyStrategy: FarFlyStrategy
})

console.log('Little Duck')
console.log(littleDuck.quack())
console.log(`I fly for ${littleDuck.fly()} meters`)

const hugeDuck = new Duck({ 
  quackStrategy: LoudQuackStrategy,
  flyStrategy: SmallFlyStrategy
})

console.log('Huge Duck')
console.log(hugeDuck.quack())
console.log(`I fly for ${hugeDuck.fly()} meters`)