import styles from './header.module.css'

export const Header = () => {
    
    const date = new Date();

    function getDateForHead(date: Date) {
        let dayOfWeek = date.getDay();
        let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        let dayOfMonth = date.getDate();
        let month = date.getMonth();
        let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
        return days[dayOfWeek] + ', ' + dayOfMonth + ' ' + months[month]
    }
    
    return (
        <header className={styles.app__header}>
        <a
          className={styles.app__logo}
          href="/"
        >
          Your ToDo
        </a>
        <span className={styles.app__date}>{getDateForHead(date)}</span>
      </header>
    )
}