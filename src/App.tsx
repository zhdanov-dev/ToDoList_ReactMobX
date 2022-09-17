import './App.scss';
import { Header } from './components/header/header';
import Input from './components/input/input';
import TodoList from './components/todolist/todolist';
import { observer } from 'mobx-react-lite';

function App() {

  return (
    <div className="app">
      <Header/>
      <main className='app__main'>
        <Input/>
        <TodoList/>
      </main>
    </div>
  );
}

export default observer(App);
