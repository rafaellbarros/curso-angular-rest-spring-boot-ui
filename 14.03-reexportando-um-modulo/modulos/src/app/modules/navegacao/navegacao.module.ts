import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { BotoesModule } from '../botoes';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    BotoesModule
  ],
  exports: [MenuComponent, BotoesModule]
})
export class NavegacaoModule { }
