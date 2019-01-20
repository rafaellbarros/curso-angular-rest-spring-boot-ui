import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoGrandeComponent } from './components/botao-grande/botao-grande.component';

@NgModule({
  declarations: [BotaoGrandeComponent],
  imports: [
    CommonModule
  ],
  exports: [BotaoGrandeComponent]
})
export class BotoesModule { }
