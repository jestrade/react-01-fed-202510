import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
