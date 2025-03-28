
import {  RouterProvider } from "react-router-dom";
import { AppContext } from "./AppContext";
import { router } from "../router/AppRouter";
// import { router } from "../router";


const ContextProvider = ({ children }) => {
  


  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;

export const AppProvider = () =>{
    <ContextProvider>
         <RouterProvider router={router }/>
    </ContextProvider>

}