import { RouterProvider } from "react-router-dom";
import router from "./../router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './languge'
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const queryClient = new QueryClient()
function App() {

  const{i18n}=useTranslation()
  useEffect(()=>{
    const dir= i18n.language==='ar'?'rtl':'ltr';
    document.documentElement.dir=dir;

  },[i18n.language])
  return (
    <>
      

       <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </>
  )
}

export default App;