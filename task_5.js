
class ElectricalAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;

  }

  //methods and properties for calculating energy consumption at a given moment
  static _totalPower = 0

  static get totalPower() {
    return this._totalPower;
  }

  static set totalPower(power) {
    ElectricalAppliance._totalPower += power;
  }

  plugIn() {
    ElectricalAppliance.totalPower = this.isPlugged ? 0 : this.power;
    this.isPlugged = true;
    console.log(`${this.name} is plugged.`);
  }

  unplug() {
    ElectricalAppliance.totalPower = this.isPlugged ? -this.power : 0;
    this.isPlugged = false;
    console.log(`${this.name} is unpluged.`)
  }
}

class Computer extends ElectricalAppliance {
  constructor(brand, type, name, power) {
    super(name, power);
    this.brand = brand;
    this.type = type;
    this.isPlugged = true;
    ElectricalAppliance.totalPower = this.isPlugged ? power : 0;
  }
}

class Lamp extends ElectricalAppliance {
  constructor(brand, type, name, power) {
    super(name, power);
    this.brand = brand;
    this.type = type;
    this.isPlugged = false;
    ElectricalAppliance.totalPower = this.isPlugged ? power : 0;
  }
}

const computer1 = new Computer('Apple', 'laptop', 'Computer #1', 400);
const officeLamp = new Lamp('GM', 'LED', 'Office Lamp', 5);
console.log(computer1.isPlugged);
console.log(officeLamp.isPlugged);
console.log(ElectricalAppliance.totalPower);
computer1.plugIn()
console.log(ElectricalAppliance.totalPower);
officeLamp.plugIn()
console.log(ElectricalAppliance.totalPower);
computer1.unplug()
console.log(ElectricalAppliance.totalPower);
