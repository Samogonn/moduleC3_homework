
function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function() {
  this.isPlugged = true;
  console.log(`${this.name} is plugged.`);
}

ElectricalAppliance.prototype.unplug = function() {
  this.isPlugged = false;
  console.log(`${this.name} is unplugged.`);
}

function Lamp(name, power, brand, bulbType) {
  this.name = name;
  this.power = power;
  this.brand = brand;
  this.bulbType = bulbType;
  this.isPlugged = true;
}

Lamp.prototype = new ElectricalAppliance();

function Computer(name, power, brand, functionality) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.functionality = functionality;
  this.isPlugged = false;
}

Computer.prototype = new ElectricalAppliance();

const officeLamp = new Lamp('Office Lamp', 5, 'GM', 'LED');
const computer1 = new Computer('Computer #1', 400, 'Apple', 'portable');

officeLamp.unplug();
computer1.plugIn();

console.log(computer1.isPlugged)
console.log(officeLamp.isPlugged)
