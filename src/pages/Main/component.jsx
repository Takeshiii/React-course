import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Layout } from "../../components/Layout/component";
import { RestaurantContainer } from "../../components/Restaurant/container";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { REQUEST_STATUS } from "../../constants/statuses";
import { useRequest } from "../../hooks/use-request";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const restaurantLoadingStatus = useRequest(getRestaurants);
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  useEffect(() => {
    setActiveRestaurantId(restaurantIds[0]);
  }, [restaurantIds]);

  return (
    <Layout>
      {restaurantLoadingStatus === REQUEST_STATUS.pending ||
      restaurantLoadingStatus === REQUEST_STATUS.idle ? (
        <div>Loading...</div>
      ) : (
        <RestaurantTabsContainer
          activeRestaurantId={activeRestaurantId}
          onTabSelect={setActiveRestaurantId}
        />
      )}
      {activeRestaurantId && (
        <RestaurantContainer restaurantId={activeRestaurantId} />
      )}
    </Layout>
  );
};
