const contoAllaRovescia = n => {

    if (isNaN(n))
        console.error(`inserisci un numero`);

    const intervalId = setInterval(() => {
        if (n === 0) {
            console.log(`Tempo scaduto!!!`)
            clearInterval(intervalId);
        } else {
            console.log(n--);
        }
    }, 1000);


};

contoAllaRovescia(5);