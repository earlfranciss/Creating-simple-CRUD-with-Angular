import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { user } from '../../user-model';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {
  @Output() save = new EventEmitter<user>();

  showAddModal = false;

  addForm = new FormGroup({
    usercode: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
  });

  OpenModal() {
    this.showAddModal = true;
  }

  CloseModal() {
    this.showAddModal = false;
    this.addForm.reset();
  }

  onSave() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }

    const newUser: user = {
      userCode: this.addForm.value.usercode!,
      firstName: this.addForm.value.firstname!,
      lastName: this.addForm.value.lastname!,
    };

    this.save.emit(newUser);
    this.CloseModal();
  }
}
