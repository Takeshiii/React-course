import { RestaurantTabContainer } from "../RestaurantTab/container";

import styles from "./styles.module.scss";

export const RestaurantTabs = ({
  restaurantIds,
  onTabSelect,
  activeRestaurantId,
}) => {
  return (
    <div className={styles.tabs}>
      {restaurantIds.map((id) => (
        <RestaurantTabContainer
          key={id}
          restaurantId={id}
          onClick={() => onTabSelect(id)}
          isActive={id === activeRestaurantId}
        />
      ))}
    </div>
  );
};
