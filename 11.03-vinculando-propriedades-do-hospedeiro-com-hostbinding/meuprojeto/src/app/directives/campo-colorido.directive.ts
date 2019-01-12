import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[campoColorido]'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus')  aoGanharFoco() {
    this.corDeFundo = 'green';
  }

  @HostListener('blur') aoPerderFoco() {
    this.corDeFundo = 'transparent';
  }

}


