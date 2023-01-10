import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import { TaskProvider } from './components/TaskContext';
import PopUp from './components/PopUp';
import OverLay from './components/OverLay';
const App = () => {
  return (
    <TaskProvider>
      <PopUp />
      <OverLay />
      <Header />
      <div className='container'>
        <AddTask />
        <Tasks />
      </div>
    </TaskProvider>
  );
};
export default App;