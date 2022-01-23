import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app.js";
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';

const DOMAIN = process.env.REACT_APP_DOMAIN;
const CID = process.env.REACT_APP_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={DOMAIN}
    clientId={CID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

