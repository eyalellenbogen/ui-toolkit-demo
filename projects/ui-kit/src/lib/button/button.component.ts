// tslint:disable: component-selector
// tslint:disable: no-input-rename
import { Input, Component, HostBinding } from '@angular/core';

export type ButtonType = 'primary' | 'secondary';

@Component({
  selector: 'button[uikitButton]',
  templateUrl: './button.component.html',
})
export class UiKitButtonComponent {
  @Input('uikitButton')
  buttonType: ButtonType;

  @HostBinding('class')
  public get classList() {
    return [
      'border-none',
      'outline-none',
      'py-sm',
      'px-md',
      'text-align-center',
      'cursor-pointer',
      'font-size-md',
      'transition-all-fast',
      'hover:box-shadow-heavy',
    ].join(' ');
  }

  @HostBinding('class.background-color-accent')
  @HostBinding('class.color-light')
  public get isPrimary() {
    return !this.buttonType || this.buttonType === 'primary';
  }

  @HostBinding('class.background-color-light')
  @HostBinding('class.color-primary')
  public get isSecondary() {
    return this.buttonType === 'secondary';
  }
}
