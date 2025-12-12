import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {
  // @Input({ required: true }) userInput: string = ``;
  @Output() OpenModalButton = new EventEmitter<string>();
  addForm: FormGroup = new FormGroup({
    usercode: new FormControl<any>('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    firstname: new FormControl<any>('', [Validators.required]),
    lastname: new FormControl<any>('', [Validators.required]),
  });
  showAddModal = false;

  OpenModal() {
    this.OpenModalButton.emit;
    this.showAddModal = true;
  }

  CloseModal() {
    this.showAddModal = false;
  }

  getInfo() {
    const value = this.addForm.value;

    console.log('User Code:', value.usercode);
    console.log('First Name:', value.firstname);
    console.log('Last Name:', value.lastname);  


  }
}
