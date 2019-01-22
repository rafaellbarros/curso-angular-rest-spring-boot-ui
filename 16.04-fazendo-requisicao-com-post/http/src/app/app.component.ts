import { Component, OnInit } from '@angular/core';
import { CidadeService } from './cidade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cidades = [];

  constructor(private cidadeService: CidadeService) {}

  ngOnInit(): void {
    this.consultar();
  }

  adicionar(nome: string) {
    this.cidadeService.adicionar({ nome })
      .subscribe(cidade => {
        alert(`Cidade "${cidade.nome}" adicionada com código "${cidade.id}"!`);
        this.consultar();
      });
  }

  excluir(id: number) {
    alert(id);
  }

  atualizar(cidade: any) {
    alert(JSON.stringify(cidade));
  }

  private consultar() {
    this.cidadeService.consultar()
      .subscribe(dados => this.cidades = dados);
  }

}
