import { useTheme } from "../../contexts/Theme";
import { Button } from "../Button/component";

export const ThemeChanger = () => {
  const { toggleTheme } = useTheme();

  return <Button title="Change theme" onClick={toggleTheme} />;
};
