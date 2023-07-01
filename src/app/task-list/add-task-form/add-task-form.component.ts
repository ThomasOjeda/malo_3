import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss'],
})
export class AddTaskFormComponent {
  @Output() addTaskTrigger = new EventEmitter<string>();
  newTaskName!: string;
  registerInputChange(newValue: string) {
    this.newTaskName = newValue;
  }
  receiveButtonClick() {
    this.addTaskTrigger.emit(this.newTaskName);
  }
}
