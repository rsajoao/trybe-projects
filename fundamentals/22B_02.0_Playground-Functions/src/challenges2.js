const countRepetitions = (number, arr) => {
  let repetitions = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (number === arr[i]) {
      repetitions += 1;
    }
    if (repetitions >= 3) return false;
  }
  return true;
};

const validNumberRepetitions = (arr) => {
  for (let i = 0; i < 10; i += 1) {
    if (!countRepetitions(i, arr)) {
      return false;
    }
  }
  return true;
};

const validNumberDigits = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (Number(arr[i]) < 0 || Number(arr[i]) > 9) return false;
  }
  return true;
};

function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (!(validNumberDigits(arr) && validNumberRepetitions(arr))) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${arr.slice(0, 2).join('')}) ${arr.slice(2, 7)
    .join('')}-${arr.slice(7, 11).join('')}`;
}

function triangleCheck(lineA, lineB, lineC) {
  const testLine = (A, B, C) => A < (B + C) && A > Math.abs(B - C);
  return testLine(lineA, lineB, lineC)
    && testLine(lineB, lineA, lineC)
    && testLine(lineC, lineA, lineB);
}

function hydrate(pedido) {
  const bebidas = /\d+/g;
  const quantidade = pedido.match(bebidas);
  let agua = 0;
  for (let i = 0; i < quantidade.length; i += 1) {
    agua += Number(quantidade[i]);
  }
  if (agua === 1) return '1 copo de água';
  return `${agua} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
