import classes from "./styles.module.scss";
import { StatCard } from "@/components/stat-card";

export const Statistics = ({ tasks }) => {
  const total = tasks.length;
  const tasksInProgress = tasks.filter((item) => !item.completed).length;
  const tasksDone = total - tasksInProgress;

  const progressMax = 100;
  const progress = Math.round(
    Math.max(Math.min(tasksDone / total, 100), 0) * progressMax,
  );

  return (
    <section className={classes.statistics}>
      <StatCard title="Всего задач" value={total} />
      <StatCard title="В работе" value={tasksInProgress} />
      <StatCard title="Завершено" value={tasksDone} />
      <StatCard title="Прогресс">
        <div className={`${classes.statistics__progress} ${classes.progress}`}>
          <span className={classes.progress__number}>{progress}%</span>
          <progress
            className={classes.progress__line}
            value={progress}
            max={progressMax}
          />
        </div>
      </StatCard>
    </section>
  );
};
