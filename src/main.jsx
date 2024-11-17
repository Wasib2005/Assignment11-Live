import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./Routers/MainRouter.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoadingContextProvider from "./Providers/LoadingContextProvider.jsx";
import AuthContextProvider from "./Providers/AuthContextProvider.jsx";


const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <LoadingContextProvider>
          <RouterProvider router={MainRouter} />
        </LoadingContextProvider>
      </QueryClientProvider>
    </AuthContextProvider>
  </StrictMode>
);
