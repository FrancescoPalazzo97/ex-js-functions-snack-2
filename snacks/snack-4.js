const createTimer = ms => {
    return setTimeout(() => {
        console.log(`Tempo scaduto!!!`);
    }, ms);
}

createTimer(1000);
createTimer(2000);

