import { useState, useEffect } from 'react';
import classes from './App.module.scss';
import { localStorageService } from './services';
import { Header } from './components/header';
import { Statistics } from './components/statistics';
import { CreatingTask } from './components/creating-task';
import { Tasks } from './components/tasks';
import { EditTaskModal } from './components/edit-task-modal';

export const App = () => {
  const [tasks, setTasks] = useState(() => localStorageService.loadTasks());
  const [searchValue, setSearchValue] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [editableTaskId, setEditableTaskId] = useState(null);
  const [modalVisibile, setModalVisible] = useState(false);
  const filteredTasks = tasks.filter(task => {
    const filterMatch =
      currentFilter === 'all' ||
      (currentFilter === 'active' && !task.completed) ||
      (currentFilter === 'closed' && task.completed);

    const searchMatch = task.title.toLowerCase().includes(searchValue.toLowerCase());

    return filterMatch && searchMatch;
  });
  const editableTask = tasks.find(task => task.id === editableTaskId);

  useEffect(() => {
    localStorageService.saveTasks(tasks);
  }, [tasks]);

  const createNewTask = newTask => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  const toggleCompleted = id => {
    setTasks(prev => prev.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const editTask = id => {
    setEditableTaskId(id);
    setModalVisible(true);
  };

  const removeTask = id => {
    setTasks([...tasks.filter(task => task.id !== id)]);
  };

  const changeTask = (id, { title, description }) => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            title,
            description,
          };
        }
        return task;
      })
    );
  };

  return (
    <main className={classes.app}>
      <Header />
      <Statistics tasks={tasks} />
      <CreatingTask onCreateNewTask={createNewTask} />
      <Tasks
        tasks={filteredTasks}
        editTask={editTask}
        removeTask={removeTask}
        setSearchValue={setSearchValue}
        toggleCompleted={toggleCompleted}
        filterValue={currentFilter}
        onFilterClick={setCurrentFilter}
      />
      <EditTaskModal
        editableTask={editableTask}
        visible={modalVisibile}
        setVisible={setModalVisible}
        changeTask={changeTask}
      />
    </main>
  );
};
