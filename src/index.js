import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { DarkModeContexProvider } from "./contex/darkModeContex";
import { AuthContextProvider } from "./contex/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeContexProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </DarkModeContexProvider>
);
