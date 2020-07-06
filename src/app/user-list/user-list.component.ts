import { Component, OnInit } from '@angular/core';
import { IUser } from '../types';

const users: IUser[] = [
  {
    name: 'Tony Stark',
    email: 'ironman76@fancypants.com',
    avatar: 'ironman.png',
  },
  {
    name: 'Steve Rogers',
    email: 'cap@fancypants.com',
    avatar: 'cap.png',
  },
  {
    name: 'Bruce Banner',
    email: 'smash@fancypants.com',
    avatar: 'hulk.png',
  },
  {
    name: 'Donald Blake',
    email: 'love.my.mjolnir@fancypants.com',
    avatar: 'thor.png',
  },
  {
    name: 'Carol Danvers',
    email: 'cptmarvel@fancypants.com',
    avatar: 'marvel.png',
  },
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public users = users;
  constructor() {}

  ngOnInit(): void {}
}
