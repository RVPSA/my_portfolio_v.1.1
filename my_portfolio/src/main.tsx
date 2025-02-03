import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import i18next from "i18next";
import home from "./utilities/en/home-en.json";
import work from "./utilities/en/work-en.json";
import about from "./utilities/en/aboutme-en.json";
import contact from "./utilities/en/contact-en.json"
import footer from "./utilities/en/footer-en.json"
import navigation from "./utilities/en/navigation-en.json"
import homeit from "./utilities/it/home-it.json";
import workit from "./utilities/it/work-it.json";
import aboutit from "./utilities/it/aboutme-it.json";
import contactit from "./utilities/it/contact-it.json"
import footerit from "./utilities/it/footer-it.json"
import navigationit from "./utilities/it/navigation-it.json"
import { I18nextProvider } from "react-i18next";

// <> Language translation feature
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      home: home,
      work: work,
      about:about,
      contact:contact,
      navigation:navigation,
      footer:footer
    },
    it: {
      home: homeit,
      work: workit,
      about:aboutit,
      contact:contactit,
      navigation:navigationit,
      footer:footerit
    },
  },
});

const pathName = window.sessionStorage.redirect;
delete window.sessionStorage.redirect;

if (pathName && pathName !== window.location.pathname) {
  window.history.replaceState(null, "", pathName);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
