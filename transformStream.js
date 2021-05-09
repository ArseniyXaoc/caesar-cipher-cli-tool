const { Transform } = require('stream');
const  cesar = require('./cesarCode');

class myTransform extends Transform {
    constructor (param, key) {
        super();
        this.key = parseInt(key);
        this.param = param;
    }
    _transform(chunk, encoding, callback) {
        try {
            const string = chunk.toString('utf8');
            const resultString = cesar(string, this.key, this.param);
            callback(null, resultString);
        } catch (err) {
            callback(err);
        }
    }
}

module.exports = {myTransform: myTransform};