const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type, health, level, attack, defence) {
    if (typeof (name) === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Недопустимый тип данных либо количество символов меньше 2 или  больше 10');
    }
    if (typeof (type) === 'string' && types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Недопустимый тип данных либо недопустимый тип героя');
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
