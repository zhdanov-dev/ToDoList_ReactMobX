import { makeAutoObservable } from "mobx";

class TodoStore {
    todolist: Todo[] = [];
    todocopy: Todo[] = [];
    todo: Todo = this.resretTodo();

    resretTodo() {
        return {
            id: this.todolist.length || 0,
            value: '',
            checked: false
        }
    }

    constructor() {
        makeAutoObservable(this)
    }

    addTodo() {
        this.todolist.push(this.todo);
        this.todo = this.resretTodo();
        this.todocopy = this.todolist;
    }

    doneTodo(id: number) {
        const index = this.todolist.map(todo => todo.id).indexOf(id);
        this.todolist[index].checked = !this.todolist[index].checked;
    }

    deleteTodo(id: number) {
        this.todolist = this.todolist.filter(todo => todo.id !== id);
        this.todocopy = this.todolist;
    }

    all() {
        this.todolist = this.todocopy;
    }

    checked() {
        this.todolist = this.todocopy;
        this.todolist = this.todolist.filter(todo => todo.checked === true);
    }

    notChecked() {
        this.todolist = this.todocopy;
        this.todolist = this.todolist.filter(todo => todo.checked === false);
    }
}

export const todoStore = new TodoStore()
