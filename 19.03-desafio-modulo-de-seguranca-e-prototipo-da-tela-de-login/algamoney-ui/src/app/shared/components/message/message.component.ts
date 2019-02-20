import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'message',
  template: `
  <p-message *ngIf="temError()" severity="{{ severity }}" text="{{ text }}"></p-message>
  `,
  styles: [``]
})
export class MessageComponent  {
  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;
  @Input() severity: string;

  temError(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }
}
