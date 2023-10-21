import { useState } from "react";
import { useSelector } from "react-redux";
import { Layout } from "../../components/Layout/component";
import { RestaurantContainer } from "../../components/Restaurant/container";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0]
  );

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
