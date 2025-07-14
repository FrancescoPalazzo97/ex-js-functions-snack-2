const eseguiEferma = (message, interval, stop) => {

    const intervalId = setInterval(() => {
        console.log(message);
    }, interval);

    setTimeout(() => {
        clearInterval(intervalId);
    }, stop);

}

eseguiEferma(`Ciao!!!`, 2000, 10000);