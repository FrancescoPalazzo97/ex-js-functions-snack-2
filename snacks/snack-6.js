const creaContatoreAutomatico = t => {

    let count = 0;

    return () => {
        setInterval(() => {
            console.log(`Il contatore è: ${++count}`)
        }, t);
    }
}

const contatore = creaContatoreAutomatico(1000);
const contatore2 = creaContatoreAutomatico(2000);

contatore();
contatore2();