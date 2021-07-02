// Encadeamento opcional e operadores de coalescência nula

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? '1 - Vish, não existe data');
console.log(undefined ?? '2 - Vish, não existe');
console.log(null ?? '3 - Vish, não existe');
console.log(false ?? '4 - Vish, não existe');
console.log(0 ?? '5 - Vish, não existe');
console.log('' ?? '6 - Vish, não existe');
