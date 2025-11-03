//import di funzioni
import {add, sub, mult, div} from "./math.js"
//DOCUMENTAZIONE PER FUNZIONE
/**
 * Esegue l'operazione tra a e b
 * @param {*} a {number}
 * @param {*} b {number}
 * @param {*} operation {string} L'operazione da eseguire : + - * / 
 * @returns {number | Error}
 */
//export va esportata in qualunque file che lo importa
export function performOperation(a, b, operation){
    switch(operation){
        case "+":
            return add(a, b);
        case "-":
            return sub(a, b);
        case "*":
            return mult(a, b);
        case "/":
            return div(a ,b);
        default:
            return Error("⚠️ Operation Not Valid ⚠️");
    }
}