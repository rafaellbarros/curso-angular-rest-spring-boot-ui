import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FuncionarioCardComponent } from './components/funcionario-card';
import { FuncionarioFormComponent } from './components/funcionario-form';

@NgModule({
  declarations: [FuncionarioCardComponent, FuncionarioFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FuncionarioCardComponent, FuncionarioFormComponent],
  providers: []
})
export class FuncionarioModule { }
