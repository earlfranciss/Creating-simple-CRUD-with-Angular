import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { user } from './user-model';
import { CommonModule } from '@angular/common';
import { Edit } from "./modals/edit/edit";
import { Delete } from "./modals/delete/delete";
import { Add } from "./modals/add/add";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Edit, Delete, Add],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('simple-crud');

  
sampleUsers: user[] = [
    {
      userCode: '001',
      firstName: 'Jonathan',
      lastName: 'Morris',
    },
    {
      userCode: '002',
      firstName: 'Soma',
      lastName: 'Cruz',
    },
    {
      userCode: '003',
      firstName: 'Richter',
      lastName: 'Belmont',
    },
    {
      userCode: '004',
      firstName: 'Thorfinn',
      lastName: 'Karlsefni',
    },
    {
      userCode: '005',
      firstName: 'Kenshi',
      lastName: 'Yonezu',
    },
  ];
}
