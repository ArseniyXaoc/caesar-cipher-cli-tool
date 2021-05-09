const fs = require('fs');
const  path = require('path');
const { pipeline } = require('stream');
const readFile = path.join(__dirname, 'readingFile/' );
const myTransform = require('./transformStream').myTransform;
const checkParams = require('./checkParams');
const programConfig = require('./programConfig');

const { Command } = require('commander');

const program = new Command();

programConfig(program);

const options = program.opts();
const readStream = options.input ? fs.createReadStream(options.input ) : process.stdin;
const writeStream = fs.createWriteStream(options.output ? options.output : 'err'
    //{ flags: 'a+',}
    );

const transformStream = new myTransform(...checkParams(options));

pipeline(
    readStream,
    transformStream,
    options.output ? writeStream : process.stdout,
    (error) => {
        if(error) {console.log(error)}
        else {console.log('finish')}
    }
)

process.on('exit', code => {
  if(code === 1){
    console.error('params action or/and shift is undefined!')
  }
});

writeStream.on('data', chunk=>{
    console.log(chunk.toString());
});

console.log(readFile);
