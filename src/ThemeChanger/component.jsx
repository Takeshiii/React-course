import { switchTheme } from "../contexts/Theme";
import { Button } from "../components/Button/component";

export const ThemeChanger = () => {
  const { toggleTheme } = switchTheme();

  return <Button title="Change theme" onClick={toggleTheme} />;
};
