import classNames from "classnames";
import styles from "./styles.module.scss";

export const Header = ({ className, themeChanger }) => {
  return (
    <header className={classNames(styles.header, className)}>
      <h1 className={styles.title}>Restaurants</h1>
      <div>{themeChanger}</div>
    </header>
  );
};
