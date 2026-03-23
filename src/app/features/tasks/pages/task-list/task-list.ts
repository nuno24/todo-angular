import { Component, signal } from '@angular/core';
import { TaskItem } from '../../components/task-item/task-item';
import { Task } from '../../../../../types/Task';
import { TaskInput } from "../../components/task-input/task-input";


@Component({
  selector: 'app-task-list',
  imports: [TaskItem, TaskInput],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = signal<Task[]>([{
      content:'task 1',
      completed: false
    },
    {
      content: 'task 2',
      completed: false
    },
    {
      content: 'task 3',
      completed: false
    }
  ])

  addTask(newTitle: string) {
    const newTask = {
      content: newTitle,
      completed: false
    }

    this.tasks.update(tasks => [...tasks, newTask])
  }

  deleteTask(task: Task) {
    const newTasks = this.tasks()
    const filteredTasks = newTasks.filter(t => t != task)
    this.tasks.set(filteredTasks)
  }
}
