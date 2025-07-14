const createTimer = ms => {
    return () => {
        setTimeout(() => {
            console.log(`Tempo scaduto!!!`);
        }, ms);
    }
}

const timer1s = createTimer(1000);
const timer2s = createTimer(2000);

timer1s();
timer2s();