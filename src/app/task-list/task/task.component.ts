import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Output() deleteButtonClicked = new EventEmitter();
  styleTask: boolean = false;
  receiveCheckedEvent($event: boolean) {
    this.styleTask = $event;
  }

  handleDeleteButtonClick() {
    this.deleteButtonClicked.emit();
  }
}
