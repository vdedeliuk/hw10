const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function afterDelay() {
    console.log('boom.');
    rl.close();
}

rl.question('enter the delay interval in milliseconds: ', (interval) => {
    interval = parseInt(interval);

    if (!isNaN(interval) && interval > 0) {
        setTimeout(afterDelay, interval);
    } else {
        console.log('please enter a number greater than 0.');
        rl.close();
    }
});

rl.on('close', () => {
    console.log('job done.');
    process.exit(0);
});
