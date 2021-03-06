/* eslint-disable @typescript-eslint/no-namespace */

namespace MyNamespace {
  export const name = 'Rob';

  export class NamespacePerson {
    constructor(public name: string) {}
  }

  const pessoaDoNamespace = new NamespacePerson('Rob');

  export namespace AnotherNamespace {
    export const nomeDoNamespace = 'Rob';
  }
}

const pessoaDoNamespace = new MyNamespace.NamespacePerson('Rob');

export default 1 // apagar depois