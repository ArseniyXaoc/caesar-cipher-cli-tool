const fs = require('fs');
const commander = require('commander');
const  cesar = require('./cesarCode');
const  path = require('path');
const { pipeline, Transform } = require('stream');
const readFile = path.join(__dirname, 'readingFile/' );
const writeFile = path.join(__dirname, 'writingFile/' );
const myTransform = require('./transformStream');

const { Command } = require('commander');

const program = new Command();

program
  .version('0.0.1')
  .option('-s, --shift <number>', 'a shift', parseInt)
  .option('-i, --input <type>', 'an input file')
  .option('-o, --output <type>', 'an output file')
  .option('-a, --action <type>', 'an action encode/decode');


program.parse(process.argv);
const options = program.opts();

const readStream = options.input ? fs.createReadStream(options.input ) : process.stdin;
const writeStream = fs.createWriteStream(options.output);

if(isNaN(options.shift) || !options.action) {
  process.exitCode = 1;
  console.error('params action or/and shift is undefined!');
  process.exit();
} else {
  const action = options.action;
  const key = options.shift;
  const transformStream = new myTransform(action, key);

  pipeline(
    readStream,
    transformStream,
    options.output ? writeStream : process.stdout,
    (error) => {
      if(error) {console.log(error)}
      else {console.log('finish')}
    }
  )
};
process.on('exit', code => {
  if(code === 1){
    console.error('params action or/and shift is undefined!')
  }
});

writeStream.on('data', chunk=>{
    console.log(chunk.toString());
});

console.log(readFile);
//console.log(cesar('EXXEGO EX HEAR 123', 4, 'decode'));
