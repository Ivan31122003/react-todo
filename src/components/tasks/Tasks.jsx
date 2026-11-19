import classes from "./styles.module.scss";
import { TaskCard } from "@/components/task-card";

const filterItems = [
  { id: "all", label: "Все" },
  { id: "active", label: "Активные" },
  { id: "closed", label: "Завершенные" },
];

export const Tasks = ({
  toggleCompleted,
  removeTask,
  tasks,
  onFilterClick,
  searchValue,
  setSearchValue,
}) => {
  return (
    <section className={classes.tasks}>
      <h2 className={classes.tasks__title}>Мои задачи</h2>
      <div className={classes.tasks__toolbar}>
        <div>
          {filterItems.map((item) => (
            <button key={item.id} onClick={() => onFilterClick(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
      </div>
      <div className={classes.tasks__list}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            toggleCompleted={toggleCompleted}
            removeTask={removeTask}
            {...task}
          />
        ))}
      </div>
    </section>
  );
};
