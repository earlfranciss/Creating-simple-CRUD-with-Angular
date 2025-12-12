import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  showEditModal = false;
  @Output() OpenModalButton = new EventEmitter<string>();
  editForm: FormGroup = new FormGroup({
    usercode: new FormControl<any>({ value: '', disabled: true }),
    firstname: new FormControl<any>('', [Validators.required]),
    lastname: new FormControl<any>('', [Validators.required]),
  });

  @Input() set editData(value: any) {
    if (value){
      this.showEditModal = true;
      this.editForm.patchValue({
        usercode: value.userCode,
        firstname: value.firstName,
        lastname: value.lastName
      })
    }
  }
  OpenModal() {
    this.OpenModalButton.emit('');
    this.showEditModal = true;

  }

  CloseModal() {
  this.showEditModal = false;
}

  getInfo() {
    const value = this.editForm.value;

    console.log('User Code:', value.usercode);
    console.log('First Name:', value.firstname);
    console.log('Last Name:', value.lastname);  


  }

}
