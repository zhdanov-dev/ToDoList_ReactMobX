import styles from './select.module.css'
import {todoStore} from '../../store/todoStore'

export const Select= () => {
    return (
        <div className={styles.select__buttons}>
            <button className={styles.button} onClick={() => todoStore.all()}>Все</button>
            <button className={styles.button} onClick={() => todoStore.checked()}>Выполненые</button>
            <button className={styles.button} onClick={() => todoStore.notChecked()}>Невыполненые</button>
        </div>
    )
}