import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
})
export class TaskInput {
  title = output<string>()
  inputValue: string = '';

  onAddTask(inputValue: string) {
    if(inputValue === ''){
      return
    }
    this.title.emit(inputValue)
    this.inputValue = ''
  }

}
