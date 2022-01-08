import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app.js";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="ardentallegory.us.auth0.com"
    clientId="kDAjVh7flUQ3hsPYtztHvln6flXndDxR"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

