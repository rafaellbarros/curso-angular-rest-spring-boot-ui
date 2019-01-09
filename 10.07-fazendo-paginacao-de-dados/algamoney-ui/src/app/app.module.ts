import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
