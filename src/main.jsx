import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import "./index.css";
import App from "./App.jsx";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

// Add error handling for root rendering
try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <MantineProvider>
        <Provider>
          <App />
        </Provider>
      </MantineProvider>
    </StrictMode>
  );
} catch (error) {
  console.error("Error initializing app:", error);
  document.body.innerHTML = `
    <div style="
      padding: 20px;
      color: white;
      background: #1a1a1a;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: system-ui, -apple-system, sans-serif;
    ">
      <div>
        <h1>Error Initializing App</h1>
        <pre style="
          background: #2a2a2a;
          padding: 15px;
          border-radius: 5px;
          overflow: auto;
        ">${error.toString()}</pre>
      </div>
    </div>
  `;
}
