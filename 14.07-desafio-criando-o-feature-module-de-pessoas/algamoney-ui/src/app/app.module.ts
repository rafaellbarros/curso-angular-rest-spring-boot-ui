import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageModule } from 'primeng/message';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LancamentosModule } from './modules/lancamentos';
import { PessoasModule } from './modules/pessoas';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    LancamentosModule,
    PessoasModule,

    MessageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
