import React from "react"
import styles from './input.module.css'
import { todoStore } from '../../store/todoStore'
import { observer } from "mobx-react-lite";

const Input = () => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        todoStore.todo.value = value;
    }

    const onClick = () => {
        todoStore.addTodo()
    }

    return (
        <div className={styles.main__input}>
          <input className={styles.input__text} value={todoStore.todo.value} onChange={onChange} placeholder='Ваша задача...'/>
          <button className={styles.input__button} type='button' onClick={onClick}>Добавить</button>
        </div>
    )
}

export default observer(Input);