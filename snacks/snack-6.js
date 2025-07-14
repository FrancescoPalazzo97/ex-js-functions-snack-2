const creaContatoreAutomatico = (interval) => {

    let count = 0;

    const intervalId = setInterval(() => {
        console.log(`Sono passati ${++count} secondi!!!`);
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, interval);

}

creaContatoreAutomatico(20000);