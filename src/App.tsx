import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import GlobalStyles from "./themes/globalStyles";
import "twin.macro";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ka from "./locales/ka.json";
import en from "./locales/en.json";
import { NavBar } from "./components/organisms/NavBar";
import { SearchTemplate } from "./components/templates/SearchTemplate/SearchTemplate";
import { Provider } from "react-redux";
import { store } from "./store";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ka: { translation: ka },
  },
  lng: "ka",
  fallbackLng: "ka",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar />
        <SearchTemplate />
      </ThemeProvider>
    </Provider>
  );
}
export default App;
