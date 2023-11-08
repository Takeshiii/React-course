import { Restaurant } from "./component";
import { useGetRestaurantsQuery } from "../../redux/services/restaurants";

export const RestaurantContainer = ({ restaurantId }) => {
  const { data: restaurant, isLoading } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result.data?.find(({ id }) => id === restaurantId),
      };
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
