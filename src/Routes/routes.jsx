import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Colleges from "../Pages/Colleges/Colleges";
import CollegeDetail from "../Pages/Colleges/CollegeDetail";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: '/',
            element: <Home></Home>
          },
          {
            path: 'colleges',
            element: <Colleges></Colleges>
          },
          {
            path: 'colleges/:id',
            element: <CollegeDetail></CollegeDetail>,
            loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
          }
        ]
      },
  ]);

  export default router;