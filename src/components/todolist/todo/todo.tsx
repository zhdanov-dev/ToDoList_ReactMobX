import { observer } from "mobx-react-lite";
import React from "react";
import styles from './todo.module.scss'
import {todoStore} from '../../../stores/todoStore'

interface todoItem {
    todo: Todo;
}

const Todo: React.FC<todoItem> = ({todo}) => {
    return (
        <div className={styles.list__todo}>
            <div style={{
                opacity: todo.checked ? 0.5 : 1,
                textDecoration: todo.checked ? 'line-through' : 'none'
            }}>
                {todo.value}
            </div>
            <div className={styles.todo__buttons}>
                <button className={styles.buttons} onClick={() => todoStore.doneTodo(todo.id)}>
                    <span className="material-symbols-outlined" style={{color: 'green'}}>
                        check_circle
                    </span>
                </button>
                <button className={styles.buttons} onClick={() => todoStore.deleteTodo(todo.id)}>
                    <span className="material-symbols-outlined" style={{color: 'red'}}>
                        delete
                    </span>
                </button>
            </div>
        </div>
    )
}

export default observer(Todo);