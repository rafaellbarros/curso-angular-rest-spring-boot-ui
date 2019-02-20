import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './components/login-form';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    InputTextModule,
    ButtonModule,

    SegurancaRoutingModule
  ]
})
export class SegurancaModule { }
