import classes from "./styles.module.scss";
import { TaskCard } from "@/components/task-card";

const filterItems = [
  { id: "all", label: "Все" },
  { id: "active", label: "Активные" },
  { id: "closed", label: "Завершенные" },
];

export const Tasks = ({
  toggleCompleted,
  editTask,
  removeTask,
  tasks,
  filterValue,
  onFilterClick,
  searchValue,
  setSearchValue,
}) => {
  return (
    <section className={classes.tasks}>
      <h2 className={classes.tasks__title}>Мои задачи</h2>
      <div className={classes.tasks__toolbar}>
        <div className={classes.tasks__filterItems}>
          {filterItems.map((item) => (
            <button className={`${classes.tasks__filterItem} ${item.id === filterValue && classes['tasks__filterItem--active']}`} key={item.id} onClick={() => onFilterClick(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <input
          className={classes.tasks__search}
          value={searchValue}
          placeholder="Поиск"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className={classes.tasks__list}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            toggleCompleted={toggleCompleted}
            editTask={editTask}
            removeTask={removeTask}
            {...task}
          />
        ))}
      </div>
    </section>
  );
};
