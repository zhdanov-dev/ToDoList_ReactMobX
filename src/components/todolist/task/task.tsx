import { observer } from "mobx-react-lite";
import React from "react";
import styles from './task.module.css'
import {todoStore} from '../../../store/todoStore'

interface TaskItem {
    task: Todo;
}

const Task: React.FC<TaskItem> = ({task}) => {
    return (
        <div className={styles.list__task}>
            <div className={styles.task__value} style={{
                opacity: task.checked ? 0.5 : 1,
                textDecoration: task.checked ? 'line-through' : 'none'
            }}>
                {task.value}
            </div>
            <div className={styles.task__buttons}>
                <button className={styles.buttons} onClick={() => todoStore.doneTodo(task.id)}>
                    <span className="material-symbols-outlined" style={{color: 'green'}}>
                        check_circle
                    </span>
                </button>
                <button className={styles.buttons} onClick={() => todoStore.deleteTodo(task.id)}>
                    <span className="material-symbols-outlined" style={{color: 'red'}}>
                        delete
                    </span>
                </button>
            </div>
        </div>
    )
}

export default observer(Task);