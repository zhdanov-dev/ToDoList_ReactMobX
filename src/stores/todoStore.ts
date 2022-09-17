import { makeAutoObservable } from "mobx";
import { todoListStore } from './todoListStore'

class TodoStore {
    todo: Todo = this.resretTodo();

    resretTodo() {
        return {
            id: todoListStore.todolist[todoListStore.todolist.length - 1].id + 1,
            value: '',
            checked: false
        }
    }

    constructor() {
        makeAutoObservable(this)
    }

    changeTodo(text: string) {
        this.todo.value = text;
    }

    addTodo() {
        todoListStore.todolist.push(this.todo);
        this.todo = this.resretTodo();
    }

    doneTodo(id: number) {
        const index = todoListStore.todolist.map(todo => todo.id).indexOf(id);
        todoListStore.todolist[index].checked = !todoListStore.todolist[index].checked;
    }

    deleteTodo(id: number) {
        todoListStore.todolist = todoListStore.todolist.filter(todo => todo.id !== id);
    }
}

export const todoStore = new TodoStore()
