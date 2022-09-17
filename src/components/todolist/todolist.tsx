import styles from './todolist.module.scss'
import Todo from './todo/todo'
import { todoListStore } from '../../stores/todoListStore'
import { observer } from "mobx-react-lite";
import { useState } from 'react';

const TodoList = () => {

    const [checked, setChecked] = useState(false);
    const [notChecked, setNotChecked] = useState(false);

    const all = () => {
        setChecked(false);
        setNotChecked(false);
    }

    const checkedFilter = () => {
        setChecked(true);
        setNotChecked(false);
    }

    const notCheckedFilter = () => {
        setNotChecked(true);
        setChecked(false);
    }

    const list = () => {
        if (checked) return todoListStore.checked;
        if (notChecked) return todoListStore.notChecked;
        else return todoListStore.sortedList;
    }

    return (
        <div>
            <div className={styles.select__buttons}>
                <button className={styles.button} onClick={all}>Все</button>
                <button className={styles.button} onClick={checkedFilter}>Выполненые</button>
                <button className={styles.button} onClick={notCheckedFilter}>Невыполненые</button>
            </div>
            <div className={styles.main__list}>
                {list().map((todo: Todo) => (
                    <Todo key={todo.id} todo={todo}/> 
                ))}
            </div>
        </div>
    )
}

export default observer(TodoList);