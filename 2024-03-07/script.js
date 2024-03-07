const { fakerDE } = require("@faker-js/faker");

for (let i = 0; i < 10; i++) {
  console.log(fakerDE.date.soon());
}

for (let i = 0; i < 10; i++) {
  console.log(fakerDE.number.octal());
}

for (let i = 0; i < 10; i++) {
  console.log(fakerDE.vehicle.manufacturer());
}

for (let i = 0; i < 10; i++) {
  console.log(fakerDE.hacker.phrase());
}

for (let i = 0; i < 10; i++) {
  console.log(fakerDE.location.city());
}
