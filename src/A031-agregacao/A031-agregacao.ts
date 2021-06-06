export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return Math.round(
      this.produtos.reduce((soma, produto) => soma + produto.preco, 0),
    );
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto = new Produto('Camiseta', 49.99);
const produto1 = new Produto('Caneta', 1.99);
const produto2 = new Produto('Caneca', 4.99);
const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProduto(produto, produto1, produto2);
console.log(carrinhoDeCompras.valorTotal());
