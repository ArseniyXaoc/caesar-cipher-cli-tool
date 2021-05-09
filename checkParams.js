function checkParams (options) {
    if(isNaN(options.shift) || !options.action) {
        process.exitCode = 1;
        console.error('params action or/and shift is undefined!');
        process.exit();
    } else {
        const action = options.action;
        const key = options.shift;
        return [ action,
            key,]
    }
}

module.exports = checkParams;