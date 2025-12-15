import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { user } from '../../user-model';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  showEditModal = false;

  @Output() save = new EventEmitter<user>();

  editForm = new FormGroup({
    usercode: new FormControl({ value: '', disabled: true }),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
  });

  private currentUser!: user;

  @Input() set editData(value: user | null) {
    if (value) {
      this.currentUser = value;
      this.showEditModal = true;

      this.editForm.patchValue({
        usercode: value.userCode,
        firstname: value.firstName,
        lastname: value.lastName,
      });
    }
  }

  CloseModal() {
    this.showEditModal = false;
  }

  onSave() {
    if (this.editForm.invalid) return;

    this.save.emit({
      userCode: this.currentUser.userCode,
      firstName: this.editForm.get('firstname')!.value!,
      lastName: this.editForm.get('lastname')!.value!,
    });

    this.CloseModal();
  }
}
