import { Tab } from "../Tab/component";
import { useGetRestaurantsQuery } from "../../redux/services/restaurants";

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result.data?.find(({ id }) => id === restaurantId),
      };
    },
  });

  if (!restaurant) {
    return null;
  }

  return <Tab {...props} title={restaurant.name} />;
};
