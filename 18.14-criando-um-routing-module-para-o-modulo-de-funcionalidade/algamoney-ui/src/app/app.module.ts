import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { LancamentosModule } from './modules/lancamentos';
import { PessoasModule } from './modules/pessoas';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    CoreModule,
    LancamentosModule,
    PessoasModule,
    AppRoutingModule,

    AppRoutingModule

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
