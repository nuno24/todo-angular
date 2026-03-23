import { Component, input, output } from '@angular/core';
import { Task } from '../../../../../types/Task';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  task = input.required<Task>()

  toDeleteTask = output<Task>()

  onDeleteTask (task: Task) {
    this.toDeleteTask.emit(task)
  }

}
