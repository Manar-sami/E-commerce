import { RouterProvider } from "react-router-dom";
import router from "./../router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./languge";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import UseThemmode from "./Them";
import CssBaseline from "@mui/material/CssBaseline";
import Usemode from "./store/Usemode";
const queryClient = new QueryClient();
function App() {
  const mode = Usemode((state)=>state.mode);

  const { i18n } = useTranslation();
  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
  }, [i18n.language]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={UseThemmode(mode)}>
          <RouterProvider router={router} />
          <CssBaseline />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
