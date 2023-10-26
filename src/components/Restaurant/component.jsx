import { AddReviewButton } from "../AddReviewButton/component";
import { MenuContainer } from "../Menu/container";
import { ReviewsContainer } from "../Reviews/container";

import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2 className={styles.title}>{restaurant.name}</h2>
      <MenuContainer restaurantId={restaurant.id} />
      <ReviewsContainer restaurantId={restaurant.id} />
      <AddReviewButton restaurantId={restaurant.id} />
    </div>
  );
};
