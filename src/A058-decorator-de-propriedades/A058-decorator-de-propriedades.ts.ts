function decorator(classPrototype: any, name: string | any): any {
  let propertyValue: any;

  return {
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string'){
        propertyValue = value.split('').reverse().join('');
        return;
      }

      propertyValue = value;
    },
  };
}

export class Person {
  @decorator
  name: string;
  @decorator
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  method(msg: string): string {
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
