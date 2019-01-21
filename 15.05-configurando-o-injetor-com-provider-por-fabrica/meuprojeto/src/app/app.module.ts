import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioService, FuncionariAbreviadoService } from './funcionario.service';

const  criarFuncionarioService = () => {
  return new FuncionariAbreviadoService(2);
}

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: FuncionarioService, useFactory: criarFuncionarioService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
