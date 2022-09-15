import styles from './todolist.module.css'
import Task from './task/task'
import { todoStore } from '../../store/todoStore'
import { observer } from "mobx-react-lite";


const TodoList = () => {
    return (
        <div className={styles.main__list}>
            {todoStore.todolist.map((todo: Todo) => (
                <Task key={todo.id} task={todo}/> 
            ))}
        </div>
    )
}

export default observer(TodoList);