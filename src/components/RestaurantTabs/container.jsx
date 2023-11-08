import { RestaurantTabs } from "./component";
import { useGetRestaurantsQuery } from "../../redux/services/restaurants";

export const RestaurantTabsContainer = (props) => {
  const { data: restaurantIds } = useGetRestaurantsQuery();

  return <RestaurantTabs {...props} restaurantIds={restaurantIds} />;
};
