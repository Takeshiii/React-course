import { useTheme } from "../../contexts/Theme";

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
  const { theme } = useTheme();

  return (
    <button
      className={classNames(
        styles.button,
        styles[size],
        styles[viewVariant],
        styles[theme],
        {
          [styles.active]: active,
        }
      )}
      disabled={disabled}
      onClick={onClick}>
      {title}
    </button>
  );
};
