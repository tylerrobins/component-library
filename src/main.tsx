import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/styles/output.css";
import { ToastProvider, ToastViewport } from "@/components/ui/Toast/toast.tsx";
import { Toaster } from "@/components/ui/Toaster/toaster.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
      <Toaster />
      <ToastViewport />
    </ToastProvider>
  </React.StrictMode>,
);
