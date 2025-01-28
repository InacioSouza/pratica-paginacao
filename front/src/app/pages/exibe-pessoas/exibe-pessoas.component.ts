import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { PaginacaoComponent, PaginacaoModule } from 'src/app/shared/components/paginacao/paginacao.component';
import { Pessoa } from 'src/app/shared/modelo/Pessoa';

@Component({
  selector: 'app-exibe-pessoas',
  templateUrl: './exibe-pessoas.component.html',
  styleUrls: ['./exibe-pessoas.component.css']
})
export class ExibePessoasComponent {

  pessoas: Pessoa[] = [];
  qtdDadosPorPagina: number = 10;

  carregaDados(dados: any): void {
    this.pessoas = dados;
  }

}

@NgModule({
  declarations: [ExibePessoasComponent],
  imports: [CommonModule, PaginacaoModule],
  exports: [ExibePessoasComponent]
})
export class ExibePessoasModule {
}
