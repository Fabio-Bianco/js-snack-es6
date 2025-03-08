
// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore. -->


// Array di oggetti 

// const bike = [
//   {
//     nome: "Bianchi Oltre",
//     peso: 7.2,
//   },

//   {
//     nome: "Pinarello Dogma",
//     peso: 6.8,
//   },

//   {
//     nome: "Colnago V3Rs",
//     peso: 7.0,
//   },

//   { nome: "Trek Emonda",
//      peso: 6.5 
//   },

//   { nome: "Specialized Tarmac", 
//     peso: 6.7 
//   },
// ];

// // Stampo l'intero array
// console.log (bike);

// // stampo in consolle la bici con il peso minore (oggetto)
// console.log (bike[3]);


// // Con un ciclo for sull'arry trovo la bici con il peso minore;

// let lightBike = bike [0];

// for (let i = 1; i = bike.length; i++ ) {
//      if (bike[i].peso < lightBike.peso) {
//         lightBike = bike[i];
//      }
     
// }

// Creazione dell'array di oggetti con nome e peso delle bici
const biciclette = [
    { nome: "Bianchi Oltre", peso: 7.2 },
    { nome: "Pinarello Dogma", peso: 6.8 },
    { nome: "Colnago V3Rs", peso: 7.0 },
    { nome: "Trek Emonda", peso: 6.5 },
    { nome: "Specialized Tarmac", peso: 6.7 }
];

// Stampo l'intero array
console.log (biciclette);

// console.log (bike[3]);
console.log (biciclette[3]);

// ciclo for per trovare la bici con il peso minore
let biciLeggera = biciclette[0];

for (let i = 1; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciLeggera.peso) {
        biciLeggera = biciclette[i];
    }
}

// Stampa il risultato anche in console
console.log("La bici più leggera è:", biciLeggera);
console.log(`Nome: ${biciLeggera.nome}, Peso: ${biciLeggera.peso} kg`);


