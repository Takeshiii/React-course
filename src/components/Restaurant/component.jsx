import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2 className={styles.title}>{restaurant.name}</h2>
      <Menu dishes={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
