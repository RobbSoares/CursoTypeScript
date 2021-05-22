// Tuple
const dadosCliente: readonly [number, string] = [1, 'Rob']; // readonly - imutável
const dadosCliente2: [number, string, string] = [1, 'Rob', 'Soares'];
const dadosCliente3: [number, string, string?] = [1, 'Rob', 'Soares']; // ? - opcional
const dadosCliente4: [number, string, ...string[]] = [1, 'Rob', 'Soares'];

// dadosCliente[0] = 100;
// dadosCliente[1] = 'Robson';

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['a', 'b', 'c'];
const array2: ReadonlyArray<string> = ['a', 'b', 'c'];

console.log(array1);
console.log(array2);
