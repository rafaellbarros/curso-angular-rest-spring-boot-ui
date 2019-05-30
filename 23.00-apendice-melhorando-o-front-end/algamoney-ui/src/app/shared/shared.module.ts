import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageModule } from 'primeng/components/message/message';
import { MessageComponent } from './components/message';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MessageModule
  ],
  exports: [
    MessageModule,
    MessageComponent
  ]
})
export class SharedModule { }
