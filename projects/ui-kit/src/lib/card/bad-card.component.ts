import { Component, OnInit, Input } from '@angular/core';

export interface ICardData {
  name: string;
  email: string;
  imageUrl: string;
  buttons: { text: string; action: () => void }[];
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'bad-card',
  templateUrl: './bad-card.component.html',
})
export class BadCardComponent {
  @Input()
  data: ICardData;
}
