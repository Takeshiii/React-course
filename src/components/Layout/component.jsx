import { useContext } from "react";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";
import { ThemeContext } from "../../contexts/Theme";

import styles from "./styles.module.scss";
import classNames from "classnames";

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div data-theme={theme}>
      <div className={classNames(styles.root, styles.container)}>
        <Header className={styles.header} />
        <main>{children}</main>
        <Footer />
      </div>
      <div id="modal-container"></div>
    </div>
  );
};
