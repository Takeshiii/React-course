import { DishContainer } from "../Dish/container";

import styles from "./styles.module.scss";

export const Menu = ({ menu }) => {
  return (
    <div className={styles.menu}>
      {menu.map((id) => (
        <DishContainer key={id} dishId={id} />
      ))}
    </div>
  );
};
