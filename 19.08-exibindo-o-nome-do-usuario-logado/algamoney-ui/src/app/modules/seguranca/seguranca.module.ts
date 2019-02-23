import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { LoginFormComponent } from './components/login-form';
import { SegurancaRoutingModule } from './seguranca-routing.module';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    SegurancaRoutingModule
  ]
})
export class SegurancaModule { }
