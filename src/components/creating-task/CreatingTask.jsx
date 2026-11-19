import { useId, useState } from "react";
import classes from "./styles.module.scss";

export const CreatingTask = ({ onCreateNewTask }) => {
  const firstId = useId();
  const secondId = useId();

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const handleTitleInput = (e) => {
    const newTitle = e.target.value;
    setNewTask({ ...newTask, title: newTitle });
  };

  const handleDescriptionInput = (e) => {
    const newDescription = e.target.value;
    setNewTask({ ...newTask, description: newDescription });
  };

  const createTask = (e) => {
    e.preventDefault();
    if (newTask.title.trim().length === 0) {
      alert('Поле "Название задачи" не заполнено');
      return;
    }
    onCreateNewTask(newTask);
  };

  return (
    <form className={classes.creatingTask} onSubmit={createTask}>
      <h2 className={classes.creatingTask__title}>Добавить задачу</h2>

      <div className={classes.creatingTask__fieldWrapper}>
        <label htmlFor={firstId} className={classes.creatingTask__fieldLabel}>
          Название задачи
        </label>
        <input
          id={firstId}
          value={newTask.title}
          placeholder="Например, прочитать главу"
          onInput={handleTitleInput}
        ></input>
      </div>

      <div className={classes.creatingTask__fieldWrapper}>
        <label htmlFor={secondId} className={classes.creatingTask__fieldLabel}>
          Описание (необязательно)
        </label>
        <textarea
          id={secondId}
          value={newTask.description}
          placeholder="Добавь немного подробностей"
          onInput={handleDescriptionInput}
        ></textarea>
      </div>

      <div className={classes.creatingTask__submitButtonWrapper}>
        <button type="submit">Добавить задачу</button>
      </div>
    </form>
  );
};
