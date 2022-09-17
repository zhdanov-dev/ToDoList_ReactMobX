import React from "react"
import styles from './input.module.scss'
import { todoStore } from '../../stores/todoStore'
import { observer } from "mobx-react-lite";

const Input = () => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        todoStore.changeTodo(event.target.value);
    }

    const onClick = () => {
        if (todoStore.todo.value) todoStore.addTodo();
    }

    const onKeyDown = (event: any) => {
        if (event.keyCode === 13) {
            if (todoStore.todo.value) todoStore.addTodo();
        }
    }

    return (
        <div className={styles.main__input}>
          <input className={styles.input__text} value={todoStore.todo.value} onChange={onChange} onKeyDown={onKeyDown} placeholder='Ваша задача...'/>
          <button className={styles.input__button} type='button' onClick={onClick}>Добавить</button>
        </div>
    )
}

export default observer(Input);