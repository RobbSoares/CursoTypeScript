/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'rob'; // Qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.75, -5.85 0xf00d, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let numberArrays: Array<number> = [1, 2, 3];
let numberArrays2: number[] = [1, 2, 3];
let stringArrays: Array<string> = ['1', '2', '3'];
let stringArrays2: string[] = ['1', '2', '3'];

// Objetos
let person: { nome: string, idade: number, adulto?: boolean } = {
  nome: 'rob',
  idade: 20,
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const result = soma(2, 2);

const soma2: (x: number, y: number) => number = (x, y) => x + y;

