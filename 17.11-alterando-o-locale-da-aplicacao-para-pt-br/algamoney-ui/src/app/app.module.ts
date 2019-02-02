import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { LancamentosModule } from './modules/lancamentos';
import { PessoasModule } from './modules/pessoas';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

registerLocaleData(localePt);

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

    ToastyModule.forRoot(),
    ConfirmDialogModule,

  ],
  providers: [
    ConfirmationService,
    { provide: LOCALE_ID, useValue: 'pt-BR '}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
