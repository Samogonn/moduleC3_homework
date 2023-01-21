function CreatObject() {
  return Object.create(null);
}

const emptyObject = CreatObject();

console.log(emptyObject.prototype);
