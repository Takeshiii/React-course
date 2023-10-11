import { ThemeProvider } from "./contexts/Theme";
import { MainPage } from "./pages/Main/component";

export const App = () => {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
};
