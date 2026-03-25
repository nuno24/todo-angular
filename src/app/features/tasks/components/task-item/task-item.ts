import { Component, input, output, signal } from '@angular/core';
import { Task } from '../../../../../types/Task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  imports: [FormsModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  task = input.required<Task>()

  toDeleteTask = output<Task>()

  toUpdateTask = output<Task>()
  editValue: string = ''

  isUpdating = signal<boolean>(false)

  onToggleIsUpdating() {
    this.editValue = this.task().content
    this.isUpdating.update(u => !u) //TODO: re-do
    //TODO: RESET editValue on cancel
  }

  onUpdateTask(editValue: string) {
    if(editValue === '') return
    this.toUpdateTask.emit({ ...this.task(), content: editValue })
    console.log(this.toUpdateTask)
    this.editValue = ''
    this.isUpdating.set(false)
  }

  onDeleteTask (task: Task) {
    this.toDeleteTask.emit(task)
  }

}
