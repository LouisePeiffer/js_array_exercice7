// Exo 1
let prenoms = ['Adame', 'Béné', 'Ayhan', 'Louise']
console.log(prenoms);
console.log(prenoms[3]);
console.log(prenoms.length);

// Exo 2
let monPrenom = ['Louise']
monPrenom.push('Peiffer')
console.log(monPrenom);

// Exo 3
// let coding16 = ['Ayhan']
// coding16.push('Béné')
// coding16.push('Louise', 'Jamila')
// console.log(coding16);
// coding16.push('Sebastien', 'Adame', 'Nicolas')
// coding16.push('Dawid', 'Malo')
// console.log(coding16);
// coding16.splice(6, 1)
// console.log(coding16);

let classeCoding16 = [];

classeCoding16.push("ayhan");
console.log(`${classeCoding16[classeCoding16.indexOf('ayhan')]} arrive en classe à 8h43 `);

classeCoding16.push('benedicte');
console.log(`${classeCoding16[classeCoding16.indexOf('benedicte')]} attive à 8h44 et commence à mettre à jour ses notes`);

//BONUS
let tabBoucle = ["a", "b", "c"];

// tabBoucle.forEach(element => {
//     console.log(element);
// });

tabBoucle.forEach(element => console.log(element));

console.log('FINI');