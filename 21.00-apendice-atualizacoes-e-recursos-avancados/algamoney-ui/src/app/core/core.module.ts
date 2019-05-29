import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng/components/common/api';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { NaoAutorizadoComponent, PaginaNaoEncontradaComponent } from './components/inlines';
import { NavbarComponent } from './components/navbar';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

registerLocaleData(localePt);

@NgModule({
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent, NaoAutorizadoComponent],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    ConfirmDialogModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    ToastrModule,
    ConfirmDialogModule
  ],
  providers: [
    ConfirmationService,
    { provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
})
export class CoreModule { }
