type myType = number;

const numberArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numberArray);

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<myType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

minhaPromise().then((resultado) => console.log(resultado + 1));

promiseAsync().then((resultado) => console.log(resultado + 1));
