import { Component, EventEmitter, inject, Input, NgModule, OnInit, Output } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {
  pessoas: Pessoa[] = [];
  paginaAtual: number = 1;
  totalDePaginas: number = 0;
  @Input() limite: number = 10;

  @Output() dadosPaginacao = new EventEmitter<Pessoa[]>();

  private service = inject(PessoaService);

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.service.getPessoa(this.paginaAtual - 1, this.limite)
      .subscribe((resposta) => {
        this.pessoas = resposta.content;
        this.totalDePaginas = resposta.totalPages;
        this.dadosPaginacao.emit(this.pessoas);
      });
  }

  paginaAnterior(): void {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
      this.carregarDados();
    }
  }

  proximaPagina(): void {
    if (this.paginaAtual < this.totalDePaginas) {
      this.paginaAtual++;
      this.carregarDados();
    }
  }
}

@NgModule({
  declarations: [PaginacaoComponent],
  imports: [CommonModule],
  exports: [PaginacaoComponent]
})
export class PaginacaoModule { }
