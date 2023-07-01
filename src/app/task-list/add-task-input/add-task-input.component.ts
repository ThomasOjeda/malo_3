import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task-input',
  templateUrl: './add-task-input.component.html',
  styleUrls: ['./add-task-input.component.scss'],
})
export class AddTaskInputComponent {
  @Output() inputValueChanged = new EventEmitter();

  valueChanged($event: KeyboardEvent) {
    this.inputValueChanged.emit(($event.target as HTMLInputElement).value);
  }
}
