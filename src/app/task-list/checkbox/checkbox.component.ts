import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Output() checkedInputEvent = new EventEmitter<boolean>();

  checked: boolean = false;

  handleCheckboxChecked(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked as boolean;
    this.checkedInputEvent.emit(this.checked);
  }
}
