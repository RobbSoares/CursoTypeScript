// Array<T> ou T[]
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor);
}

function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

function toUpper(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(18, 5);
const concat = concatenaStrings('ola', 'oi');
const upper = toUpper('a', 'b', 'c');

console.log(result);
console.log(concat);
console.log(upper);

export = {
  result,
  multiplicaArgs,
  concatenaStrings,
};
