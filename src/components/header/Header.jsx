import classes from "./styles.module.scss";

export const Header = () => {
  return (
    <section className={classes.header}>
      <span className={classes.header__subTitle}>Моя продуктивность</span>
      <h1 className={classes.header__title}>Task Manager</h1>
      <span className={classes.header__desc}>
        Планируй дела, отслеживай прогресс и ничего не забывай
      </span>
    </section>
  );
};
