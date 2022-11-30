class Key { 
  private signature: number
  constructor() { 
    this.signature = Math.random()
  }
  getSignature(): number { 
    return this.signature
  }
}

class Person { 
  constructor(private key: Key) { }
  getKey(): Key { 
    return this.key
  }
}

abstract class House { 
  protected door = false
  private tenants: Person[] = []
  constructor(protected key: Key) { 

  }

  comeIn(person: Person): void { 
    if (!this.door) { 
      throw new Error ('door is close')
    }
    this.tenants.push(person)
    console.log('tenants in da house');
  }
  abstract openDoor (key:Key):boolean
}

class MyHouse extends House { 
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) { 
      throw new Error('key does not acces')
    }
    return this.door = true
  }
}