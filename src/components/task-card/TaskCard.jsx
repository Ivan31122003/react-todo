import { useId } from "react";
import classes from "./styles.module.scss";

export const TaskCard = ({ toggleCompleted, removeTask, ...task }) => {
  const titleId = useId();

  return (
    <div className={classes.taskCard}>
      <div className={classes.content}>
        <input
          id={titleId}
          className={classes.content__checkbox}
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompleted(task.id)}
        ></input>
        <div className={classes.info}>
          <label htmlFor={titleId}>
            <h3
              className={`${classes.info__title} ${task.completed && classes["info__title--completed"]}`}
            >
              {task.title}
            </h3>
          </label>
          {task.description?.length > 0 && (
            <span className={classes.info__desc}>{task.description}</span>
          )}
          <span
            className={`${classes.info__status} ${
              task.completed
                ? classes["info__status--completed"]
                : classes["info__status--inProgress"]
            }`}
          >
            {task.completed ? "Завершена" : "В работе"}
          </span>
        </div>
      </div>

      <div className={classes.taskCard__controls}>
        <button onClick={() => removeTask(task.id)}>Удалить</button>
      </div>
    </div>
  );
};
