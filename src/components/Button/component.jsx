import classNames from "classnames";
import styles from "./styles.module.scss";

export const Button = ({ title, disabled, onClick, style, active }) => {
  return (
    <button
      className={classNames(styles.button, styles[style], {
        [styles.active]: active,
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
      onClick={onClick}>
      {title}
    </button>
  );
};
