import classNames from "classnames";
import styles from "./styles.module.scss";

export const Button = ({ title, disabled, onClick, style }) => {
  return (
    <button
      className={classNames(styles.button, styles[style], {
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
      onClick={onClick}>
      {title}
    </button>
  );
};
