import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { Router } from '@angular/router';
import { NotificacaoService } from '../notificacao.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  itensCarrinho: IProdutoCarrinho[] = [];
  valorTotalCarrinho: number = 0;
  
  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router,
    private notificacaoService: NotificacaoService
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularValorTotalCarrinho();
  }

  removerProdutoCarrinho(produtoId: number) {
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularValorTotalCarrinho();
  }

  calcularValorTotalCarrinho() {
    this.valorTotalCarrinho = 0;
    this.itensCarrinho.forEach((produto) => {
      this.valorTotalCarrinho += (produto.preco * produto.quantidade);
    });
  }

  comprar() {
    this.carrinhoService.limparCarrinho();
    this.itensCarrinho = [];
    this.router.navigate(['/produtos']);
    this.notificacaoService.notificar("Compra realizada com sucesso!");
  }
}
