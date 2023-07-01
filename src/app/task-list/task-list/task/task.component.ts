import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Output() deleteButtonEvent = new EventEmitter();
  @Output() checkboxEvent = new EventEmitter<boolean>();

  @Input() checked: boolean = false;
  receiveCheckedEvent($event: boolean) {
    this.checkboxEvent.emit($event);
  }

  handleDeleteButtonClick() {
    this.deleteButtonEvent.emit();
  }
}
