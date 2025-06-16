import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppReduce from "./AppReduce";
import AppBankAccountReducer from "./AppBankAccountReducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <AppReduce /> */}
    {/* <AppBankAccountReducer /> */}
  </React.StrictMode>
);
