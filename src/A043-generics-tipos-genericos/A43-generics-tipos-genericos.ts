type FilterCallback<U> = (value: U, array?: U[], index?: number) => boolean;

function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a'];

const filteredArrayOriginal = array.filter((value) => value < 5);
console.log(filteredArrayOriginal);

const filteredArray = myFilter(array, (value) => value < 5);
console.log(filteredArray);
