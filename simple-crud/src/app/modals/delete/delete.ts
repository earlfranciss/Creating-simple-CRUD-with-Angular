import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  imports: [],
  templateUrl: './delete.html',
  styleUrl: './delete.css',
})
export class Delete {
  @Input({ required: true }) deleteUserCode: string = ``;
  @Output() deleteUser = new EventEmitter();

  OnDelete() {
      const trimmed = this.deleteUserCode.trim();
    // alert(`trimmed: ${trimmed}`);
    this.deleteUser.emit(trimmed);
    this.deleteUser
  }
}
