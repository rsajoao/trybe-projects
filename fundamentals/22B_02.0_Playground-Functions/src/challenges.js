function compareTrue(val1, val2) {
  return val1 && val2;
}

function calcArea(base, height) {
  return base * height * 0.5;
}

function splitSentence(string) {
  return string.split(' ');
}

function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
}

const getHighestNumber = (arr) => {
  let highest = -9.9e+10;
  for (let i = 0; i < arr.length; i += 1) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
  }
  return highest;
};

const countNumber = (highest, arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === highest) {
      count += 1;
    }
  }
  return count;
};

function highestCount(arr) {
  const highest = getHighestNumber(arr);
  let count = countNumber(highest, arr);
  return count;
}

function catAndMouse(mouse, cat1, cat2) {
  const cat1dist = Math.abs(mouse - cat1);
  const cat2dist = Math.abs(mouse - cat2);
  if (cat1dist < cat2dist) return 'cat1';
  if (cat1dist > cat2dist) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

const fizzBuzzCheck = (number) => {
  if (number % 5 === 0 && number % 3 === 0) {
    return 'fizzBuzz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  return 'bug!';
};

function fizzBuzz(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(fizzBuzzCheck(arr[i]));
  }
  return result;
}

function encode(string) {
  return string.replace(/a/ig, '1')
    .replace(/e/ig, '2')
    .replace(/i/ig, '3')
    .replace(/o/ig, '4')
    .replace(/u/ig, '5');
}

function decode(string) {
  return string.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
}

function techList(arr, name) {
  if (arr.length === 0) return 'Vazio!';
  arr.sort();
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push({
      tech: arr[i],
      name,
    });
  }
  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
