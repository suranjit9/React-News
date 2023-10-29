import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Leout/Root/Root";
import Home from "../Leout/Page/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element:<Home/>,
        }
      ]
    },
  ]);

  export default router;