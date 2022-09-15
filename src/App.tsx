import './App.css';
import { Header } from './components/header/header';
import Input from './components/input/input';
import TodoList from './components/todolist/todolist';
import { Select } from './components/select/select';
import { observer } from 'mobx-react-lite';

function App() {

  return (
    <div className="app">
      <Header/>
      <main className='app__main'>
        <Input/>
        <Select/>
        <TodoList/>
      </main>
    </div>
  );
}

export default observer(App);
