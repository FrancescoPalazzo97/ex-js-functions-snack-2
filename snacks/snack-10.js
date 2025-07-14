const creaThrottler = (callback, interval) => {
    let ultimaEsecuzione = 0;

    return (...args) => {
        const now = Date.now();

        if (now - ultimaEsecuzione >= interval) {
            ultimaEsecuzione = now;
            callback(...args);
        } else {
            console.log(`Non posso eseguire ancora!`)
        }
    }
}

const throttleLog = creaThrottler(() => {
    console.log(`Ciao!!!`);
}, 2000);

throttleLog();
throttleLog();

setTimeout(throttleLog, 3000);


