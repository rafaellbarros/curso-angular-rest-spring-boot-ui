import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { MessageModule } from 'primeng/message';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PessoaCadastroComponent } from './components/pessoa-cadastro/pessoa-cadastro.component';
import { PessoasGridComponent } from './components/pessoas-grid/pessoas-grid.component';
import { PessoasPesquisaComponent } from './components/pessoas-pesquisa/pessoas-pesquisa.component';
import { LancamentosModule } from './modules/lancamentos';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    PessoaCadastroComponent,
    MessageComponent,
    PessoasGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    LancamentosModule,

    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    MessageModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
