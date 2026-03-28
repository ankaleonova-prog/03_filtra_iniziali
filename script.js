/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByInitial (list, character) {
    const newArr = []
    for (let i=0; i<list.length; i++){
        if(list[i][0].toUpperCase() === character.toUpperCase())
            newArr.push(list[i])
    }
    retutn newArr
}


// Invoca la funzione qui e stampa il risultato in console
const newArr = filterByInitial(names, "A")
console.log(newArr)



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]