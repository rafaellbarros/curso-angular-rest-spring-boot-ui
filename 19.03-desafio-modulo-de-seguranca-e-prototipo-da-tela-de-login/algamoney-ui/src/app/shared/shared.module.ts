import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/components/message/message';
import { MessageComponent } from './components/message';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MessageModule,
    RouterModule
  ],
  exports: [
    MessageModule,
    MessageComponent,
    RouterModule
  ]
})
export class SharedModule { }
