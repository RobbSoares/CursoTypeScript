import _ from './modules';

const array = [100, 200, 300, 400];

console.log(global.MYGLOBAL);
console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
console.log(_.mul(array));