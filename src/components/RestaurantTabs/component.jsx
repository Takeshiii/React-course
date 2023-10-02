import { Tab } from "../Tab/component";

export const RestaurantTabs = ({ restaurants, onTabSelect }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Tab
          key={restaurant.id}
          title={restaurant.name}
          onClick={() => onTabSelect(index)}
        />
      ))}
    </div>
  );
};
