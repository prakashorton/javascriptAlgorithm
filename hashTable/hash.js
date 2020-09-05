// hash table

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let weried_prime = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total + weried_prime + value) % this.keyMap.length;
    }
    return total;
  }

  // set
  set(key, value) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      this.keyMap[index] = [];
    } else {
    }

    this.keyMap[index].push([key, value]);
    return index;
  }

  // get
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i]) {
          if (this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i];
          }
        }
      }
      return this.keyMap[index];
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][0]))
            keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1]))
            values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }
}
