
function programConfig(program) {
    program
        .version('0.0.1')
        .option('-s, --shift <number>', 'a shift', parseInt)
        .option('-i, --input <type>', 'an input file')
        .option('-o, --output <type>', 'an output file')
        .option('-a, --action <type>', 'an action encode/decode');
    program.parse(process.argv);
}

module.exports = programConfig;