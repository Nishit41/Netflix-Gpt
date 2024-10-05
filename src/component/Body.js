import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "./Login"

export const Body = () =>{
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>        
        },
        {
         
         path:"",
         element: <></>
        }
    ])
    return(
        <div>
        <RouterProvider router={appRouter} ></RouterProvider>
         {/* <Browse/> */}
        </div>
    )
}