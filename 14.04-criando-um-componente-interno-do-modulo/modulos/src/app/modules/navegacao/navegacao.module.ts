import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { BotoesModule } from '../botoes';
import { LinhaComponent } from './components/linha/linha.component';

@NgModule({
  declarations: [MenuComponent, LinhaComponent],
  imports: [
    CommonModule,
    BotoesModule
  ],
  exports: [MenuComponent, BotoesModule]
})
export class NavegacaoModule { }
