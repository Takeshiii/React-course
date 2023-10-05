import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../../components/Restaurant/component";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";

import styles from "./styles.module.scss";
import classNames from "classnames";

export const MainPage = () => {
  const [activeRestarauntIndex, setActiveRestarauntIndex] = useState(0);
  return (
    <div className={classNames(styles.root, styles.container)}>
      <Header className={styles.header} />
      <div>
        <RestaurantTabs
          restaurants={restaurants}
          onTabSelect={setActiveRestarauntIndex}
        />
        <Restaurant restaurant={restaurants[activeRestarauntIndex]} />
      </div>
      <Footer />
    </div>
  );
};
