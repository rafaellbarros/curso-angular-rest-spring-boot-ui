import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[campoColorido]'
})
export class CampoColoridoDirective {

  @Input('campoColorido')
  cor = 'gray'

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus')  aoGanharFoco() {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') aoPerderFoco() {
    this.corDeFundo = 'transparent';
  }

}


