function decorator(
  classPrototype: any,
  methodName: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

export class Person {
  name: string;
  surname: string;
  age: number;

  constructor(
    @decorator name: string,
    @decorator surname: string,
    @decorator age: number,
  ) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  method(@decorator msg: string): string {
    return `${this.name} ${this.surname}: ${msg}`;
  }

  get fullName(): string {
    return this.name + this.surname;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.surname = words.join(' ');
  }
}

const person = new Person('Rob', 'Soares', 20);
const method = person.method('Hello world!');
person.method = () => 'olá';
console.log(method);
