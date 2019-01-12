import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[campoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input('campoColorido')
  cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus') colorir() {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') descolorir() {
    this.corDeFundo = 'transparent';
  }

}


