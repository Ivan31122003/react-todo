import classes from "./styles.module.scss";

export const StatCard = ({ title, value, children }) => {
  return (
    <div className={classes.statCard}>
      <span className={classes.statCard__title}>{title}</span>
      {value !== undefined ? (
        <span className={classes.statCard__statValue}>{value}</span>
      ) : (
        children
      )}
    </div>
  );
};
