import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./App";

// Styles
import "./src/stylesheets/app.scss";

ReactDOM.render(<App/>, document.getElementById("app")
);

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept();
}
