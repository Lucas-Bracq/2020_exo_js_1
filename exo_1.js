let taches = [
    {
        nom: 'Travailler efficacement',
        duree: 180,
        priorite: 3,
    },
    {
        nom: 'Boire un café',
        duree: 20,
        priorite: 1,
    },
    {
        nom: 'Discuter avec ses collèges',
        duree: 120,
        priorite: 1,
    },
];

let arrNom = [];
let arrPrio = [];
let durTot = 0;
for (let key in taches) {
    arrNom.push(taches[key].nom);
    durTot += taches[key].duree;
    if (taches[key].priorite == 1){
        arrPrio.push(taches[key].priorite)
    }
}

console.log('Array nom : ' + arrNom);
console.log('Array priorité : ' + arrPrio);
console.log('Duree totale : ' +durTot);