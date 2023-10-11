import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/mock";

export const MainPage = () => {
  const [activeRestarauntIndex, setActiveRestarauntIndex] = useState(0);
  return (
    <Layout>
      <RestaurantTabs
        restaurants={restaurants}
        activeTabIndex={activeRestarauntIndex}
        onTabSelect={setActiveRestarauntIndex}
      />
      <Restaurant restaurant={restaurants[activeRestarauntIndex]} />
    </Layout>
  );
};
