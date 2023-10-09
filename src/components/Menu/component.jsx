import { Dish } from "../Dish/component";

import styles from "./styles.module.scss";

export const Menu = ({ dishes }) => {
  return (
    <div className={styles.menu}>
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
};
