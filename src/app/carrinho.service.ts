import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() {
    this.itens = this.obterCarrinho();
  }

  obterCarrinho() {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.removeItem("carrinho");
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itens = this.itens.filter((produto) => produto.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
}
