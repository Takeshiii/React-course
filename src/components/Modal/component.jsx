import { createPortal } from "react-dom";

import styles from "./styles.module.scss";

export const Modal = ({ children }) => {
  return createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>{children}</div>
    </>,
    document.querySelector("#modal-container")
  );
};
