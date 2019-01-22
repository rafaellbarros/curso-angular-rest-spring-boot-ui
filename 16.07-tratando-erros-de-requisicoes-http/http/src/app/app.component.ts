import { Component, OnInit } from '@angular/core';
import { CidadeService } from './cidade.service';
import { Cidade } from './cidade.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cidades: Cidade[];

  constructor(private cidadeService: CidadeService) {}

  ngOnInit(): void {
    this.consultar();
  }

  adicionar(cidade: Cidade) {
    this.cidadeService.adicionar(cidade)
      .subscribe(resp => {
        alert(`Cidade "${resp.nome}" adicionada com código "${resp.id}"!`);
        this.consultar();
      });
  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
      .subscribe(() => {
        alert('Cidade excluída com sucesso!');
        this.consultar();
      });
  }

  atualizar(cidade: Cidade) {
    this.cidadeService.atualizar(cidade)
      .subscribe(() => {
        alert('Cidade alterada com sucesso!');
        this.consultar();
      }, error => {
        alert(error);
      });
  }

  private consultar() {
    this.cidadeService.consultar()
      .subscribe(dados => this.cidades = dados);
  }

}
