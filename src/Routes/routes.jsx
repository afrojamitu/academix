import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Colleges from "../Pages/Colleges/Colleges";
import CollegeDetail from "../Pages/Colleges/CollegeDetail";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Pages/AdmissionForm/AdmissionForm";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

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
          },
          {
            path: 'admission',
            element: <Admission></Admission>
          },
          {
            path: 'admission/:id',
            element: <AdmissionForm></AdmissionForm>,
            loader: ({params}) => fetch(`http://localhost:5000/admission/${params.id}`)
          },
          {
            path: 'signUp',
            element: <SignUp></SignUp>
          },
          {
            path: 'login',
            element: <Login></Login>
          }
        ]
      },
  ]);

  export default router;