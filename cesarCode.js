function encode(simbolNum, key, arr){
  const encodingSim = (simbolNum + key) % arr.length;
  if(encodingSim < 0){
    return (arr[arr.length  + encodingSim]);
  }
  return arr[encodingSim];
}

function decode(simbolNum, key, arr){
  const encodingSim = (simbolNum - key) % arr.length;
  if(encodingSim < 0){
    return (arr[arr.length  + encodingSim]);
  }
  return arr[encodingSim];
}

function checkArr (alphabetUp, aplphabetLow, code, value, key) {
  if(alphabetUp.includes(value)){
    return code(alphabetUp.indexOf(value), key, alphabetUp);
  } else if(aplphabetLow.includes(value)) {
    return code(aplphabetLow.indexOf(value), key, aplphabetLow);
  } else {
    return value;
  }
}

function cesar(string, key, param){
  const alphabetUp = ['A','B','C','D','E','F','G','H','I','J','K',
    'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
  const aplphabetLow = alphabetUp.map(elem => elem.toLowerCase());
  const encoding = string.split('').map((value, index) => checkArr(alphabetUp, aplphabetLow, encode, value, key)).join('');
  const decoding = string.split('').map((value, index) => checkArr(alphabetUp, aplphabetLow, decode, value, key)).join('');
  return param === 'encode' ? encoding : decoding;
}

module.exports = cesar;