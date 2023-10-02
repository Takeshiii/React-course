import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../../components/Restaurant/component";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";

export const MainPage = () => {
  const [activeRestarauntIndex, setActiveRestarauntIndex] = useState(0);
  return (
    <div>
      <RestaurantTabs
        restaurants={restaurants}
        onTabSelect={setActiveRestarauntIndex}
      />
      <Restaurant restaurant={restaurants[activeRestarauntIndex]} />
    </div>
  );
};
