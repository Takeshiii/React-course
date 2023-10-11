import { useContext } from "react";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";
import { ThemeContext } from "../../contexts/Theme";
import { Button } from "../Button/component";

import styles from "./styles.module.scss";
import classNames from "classnames";

export const Layout = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div data-theme={theme}>
      <div className={classNames(styles.root, styles.container)}>
        <Header
          className={styles.header}
          themeChanger={<Button title={"Change theme"} onClick={toggleTheme} />}
        />
        <main>{children}</main>
        <Footer />
      </div>
      <div id="modal-container"></div>
    </div>
  );
};
