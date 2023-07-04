export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error('Персонаж уже присутсвует');
    } else { this.members.add(person); }
  }

  addAll(...persons) {
    persons.forEach((item) => this.members.add(item));
  }

  toArray() {
    const result = [];
    this.members.forEach((item) => result.push(item));
    return result;
  }

  * [Symbol.iterator]() {
    const props = Array.from(this.members);
    for (let i = 0; i < props.length; i += 1) {
      yield props[i];
    }
  }
}
