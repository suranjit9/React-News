import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Leout/Root/Root";
import Home from "../Leout/Page/Home/Home";
import Login from "../Leout/Page/Login/Login";
import SignUP from "../Leout/Page/Login/SignUp/SignUP";
import News from "../Leout/Page/SingalNews/News";
import Protected from "../Leout/Proveder/Protected";


import HomeNews from "../Leout/Page/Home/HomeNews";
import Medule from "../Leout/Page/Home/Medule";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element:<Home/>,
            // loader: () => fetch('../../public/data/news.json'),
        },
        {
          path:'/',
          element:<HomeNews></HomeNews>,
          children:[
            {
              path:'/',
              element: <Medule></Medule>
              
            }
          ]
        },
        {
          path:'/news/:id',
          element:<Protected><News></News></Protected>,
          loader: () => fetch('../../public/data/news.json'),
          
        },
        {
          path: '/LogIn',
          element:<Login></Login>
        },
        {
          path: '/SignUP',
          element:<SignUP></SignUP>
        },
       
      ]
    },
  ]);

  export default router;