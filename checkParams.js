function checkParams (options) {
    const processExit = (x) => {
        process.exitCode = 1;
        console.error(x);
        process.exit();
    }
    if(!options.shift || !options.action) {
        if(isNaN(options.shift)){
            processExit('params shift is Not a Number');
        } else processExit('params action or/and shift is undefined!');
    }

     else if(options.action !== 'encode' || options.action !== 'encode'){
        processExit('params action wrong');
    } else {
        const action = options.action;
        const key = options.shift;
        return [ action,
            key,]
    }
}

module.exports = checkParams;