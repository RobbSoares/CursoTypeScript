type getKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];
const getKey: getKeyFn = (object, key) => object[key];

export const animal = {
  name: 'Gato',
  race: 'Vira-lata',
  color: 'Yellow',
  vacines: ['Vacina um', 'Vacina dois', 'Vacina três'],
};

const vacine = getKey(animal, 'vacines');
const color = getKey(animal, 'color');
console.log(vacine, color);
