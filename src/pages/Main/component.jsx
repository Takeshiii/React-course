import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../components/Layout/component";
import { RestaurantContainer } from "../../components/Restaurant/container";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import {
  selectRestaurantIds,
  selectRestaurantLoadingStatus,
} from "../../redux/entities/restaurant/selectors";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { REQUEST_STATUS } from "../../constants/statuses";
import { useRequest } from "../../hooks/use-request";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  const [activeRestaurantId, setActiveRestaurantId] = useState();

  if (!activeRestaurantId && restaurantIds?.length) {
    setActiveRestaurantId(restaurantIds[0]);
  }

  const restaurantLoadingStatus = useRequest(getRestaurants);

  if (restaurantLoadingStatus === REQUEST_STATUS.pending) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <RestaurantTabsContainer
        activeRestaurantId={activeRestaurantId}
        onTabSelect={setActiveRestaurantId}
      />
      {activeRestaurantId && (
        <RestaurantContainer restaurantId={activeRestaurantId} />
      )}
    </Layout>
  );
};
