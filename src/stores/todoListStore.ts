import { makeAutoObservable } from "mobx";

class TodoListStore {
    todolist: Todo[] = [
        {id: 0, value: 'Первая задача!', checked: false}
    ];

    constructor() {
        makeAutoObservable(this)
    }

    get sortedList() {
        return this.todolist.slice().sort((x, y) => (x.checked === y.checked ? 0 : x.checked ? 1 : -1));
    }

    get all() {
        return this.sortedList;
    }

    get checked() {
        return this.todolist.filter(todo => todo.checked === true);
    }

    get notChecked() {
        return this.todolist.filter(todo => todo.checked === false);
    }
}

export const todoListStore = new TodoListStore()
