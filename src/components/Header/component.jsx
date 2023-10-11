import { ThemeChanger } from "../../ThemeChanger/component";

import styles from "./styles.module.scss";
import classNames from "classnames";

export const Header = ({ className }) => {
  return (
    <header className={classNames(styles.header, className)}>
      <h1 className={styles.title}>Restaurants</h1>
      <ThemeChanger />
    </header>
  );
};
