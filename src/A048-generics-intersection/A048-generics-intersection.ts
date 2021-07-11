export function joinObjects<T, U>(obj1: T, obj2: U): T & U {
  // return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = {
  name: 'rob',
};

const obj2 = {
  name1: 'luiz',
};

const join = joinObjects(obj1, obj2);
console.log(join);
