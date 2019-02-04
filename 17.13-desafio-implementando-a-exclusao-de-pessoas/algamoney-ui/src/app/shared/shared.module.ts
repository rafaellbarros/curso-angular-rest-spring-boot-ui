import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/components/message/message';
import { MessageComponent } from './components/message';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MessageModule
  ],
  exports: [MessageComponent]
})
export class SharedModule { }
