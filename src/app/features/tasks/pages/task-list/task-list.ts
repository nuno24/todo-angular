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
      id: crypto.randomUUID(),
      content:'task 1',
      completed: false
    },
    {
      id: crypto.randomUUID(),
      content: 'task 2',
      completed: false
    },
    {
      id: crypto.randomUUID(),
      content: 'task 3',
      completed: false
    }
  ])

  addTask(newTitle: string) {
    const newTask = {
      id: crypto.randomUUID(),
      content: newTitle,
      completed: false
    }

    this.tasks.update(tasks => [...tasks, newTask])
  }

  deleteTask(task: Task) {
    const newTasks = this.tasks()
    const filteredTasks = newTasks.filter(t => t.id != task.id)
    this.tasks.set(filteredTasks)
  }

  updateTask(task: Task) {
    this.tasks.update(tasks => 
      tasks.map(t => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    )
  }
}
