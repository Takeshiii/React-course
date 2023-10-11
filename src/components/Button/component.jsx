import classNames from "classnames";
import styles from "./styles.module.scss";

export const Button = ({
  title,
  disabled,
  onClick,
  active,
  size = "medium",
  viewVariant = "base",
}) => {
  return (
    <button
      className={classNames(styles.button, styles[size], styles[viewVariant], {
        [styles.active]: active,
      })}
      disabled={disabled}
      onClick={onClick}>
      {title}
    </button>
  );
};
