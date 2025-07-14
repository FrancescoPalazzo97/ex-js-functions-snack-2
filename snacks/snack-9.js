const somma = (num1, num2) => num1 + num2;
const sottrazione = (num1, num2) => num1 - num2;
const moltiplicazione = (num1, num2) => num1 * num2;
const divisione = (num1, num2) => num1 / num2;

const sequenzaOperazioni = (arr, interval) => {

    arr.forEach((item, i) => {
        setTimeout(() => {
            item();
        }, interval * i);
    });
};

sequenzaOperazioni([
    () => console.log(`Somma: ${somma(5, 5)}`),
    () => console.log(`Sottrazione: ${sottrazione(5, 5)}`),
    () => console.log(`Moltiplicazione: ${moltiplicazione(5, 5)}`),
    () => console.log(`Divisione: ${divisione(5, 5)}`)
], 2000);