import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { FeedProvider } from "./context/FeedContext";
import { ThemeProvider } from "./context/ThemeContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <UserProvider>
    <FeedProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </FeedProvider>
  </UserProvider>
);
