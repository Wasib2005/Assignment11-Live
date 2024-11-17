import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./Routers/MainRouter.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoadingContextProvider from "./Providers/LoadingContextProvider.jsx";
import AuthContextProvider from "./Providers/AuthContextProvider.jsx";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingContextProvider>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster position="top-right" reverseOrder={true} />
          <RouterProvider router={MainRouter} />
        </QueryClientProvider>
      </AuthContextProvider>
    </LoadingContextProvider>
  </StrictMode>
);
