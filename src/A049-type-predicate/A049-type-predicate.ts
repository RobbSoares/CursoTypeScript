export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function sum<T>(...args: T[]): number | null {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }

    return sum;
  }, 0);

  return retorno;
}

console.log(sum(1, 2, 3, 5));
console.log(sum(...[1, 2, 3, 4, 'a', 'b', 'c']));
console.log(sum('a', 'b', 'c'));
