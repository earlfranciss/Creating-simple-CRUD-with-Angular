import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { user } from './user-model';
import { CommonModule } from '@angular/common';
import { Edit } from './modals/edit/edit';
import { Add } from './modals/add/add';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, Edit, Add],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('simple-crud');
  showAddModal = false;
  showEditModal = false;
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

  users: any[] = this.sampleUsers;
  selectedUser: user | null = null;

  onClickDelete(userCode: string) {
    this.users = this.users.filter((user) => user.userCode !== userCode);
  }

  onClickOpenAdd(userCode: string) {
    const foundUser = this.users.find((x) => x.userCode === userCode);
    console.log('User Code', foundUser);
  }


  onClickOpenEdit(user: user) {
    this.selectedUser = { ...user };
  }

  onSaveEdit(updatedUser: user) {
    this.users = this.users.map((u) =>
      u.userCode === updatedUser.userCode ? updatedUser : u
    );
  }

  onAddUser(newUser: user) {
    const exists = this.users.some(
      (u) => u.userCode === newUser.userCode
    );

    if (exists) {
      alert('User Code already exists!');
      return;
    }

    this.users = [...this.users, newUser];
  }
}
