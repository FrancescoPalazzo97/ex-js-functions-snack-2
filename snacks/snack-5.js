const stampaOgniSecondo = () => {

    let count = 0;

    const intervalId = setInterval(() => {
        console.log(`Sono passati ${++count} secondi`);
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, 10500);

};

stampaOgniSecondo();