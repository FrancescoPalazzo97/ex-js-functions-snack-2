const somma = (num1, num2) => num1 + num2;
const sottrazione = (num1, num2) => num1 - num2;
const moltiplicazione = (num1, num2) => num1 * num2;
const divisione = (num1, num2) => num1 / num2;

const eseguiOperazione = (num1, num2, operazione) => operazione(num1, num2);

console.log(eseguiOperazione(4, 4, somma));
console.log(eseguiOperazione(4, 4, sottrazione));
console.log(eseguiOperazione(4, 4, moltiplicazione));
console.log(eseguiOperazione(4, 4, divisione));