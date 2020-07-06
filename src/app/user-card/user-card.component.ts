import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../types';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input()
  public user: IUser;
  constructor() {}

  ngOnInit(): void {}
}
