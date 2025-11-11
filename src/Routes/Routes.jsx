import { createBrowserRouter } from "react-router";

import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";

import { RotateLoader } from "react-spinners";
import ErrorPage from "../Pages/ErrorPage";


import ForgerPassword from "../Pages/ForgerPassword";
import AddCourseForm from "../Pages/AddCoursForm";
import AllCourses from "../Pages/AllCourses";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import CourseDetails from "../Pages/CourseDetails";
import UpdateCourse from "../Pages/UpdateCourse";
import MyCourses from "../Pages/MyCourses";
import Loadingspinner from "../Components/Loadingspinner";
import MyEnrolls from "../Pages/MyEnrolls";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: (
      <div className="flex justify-center mt-52">
        <Loadingspinner />
      </div>
    ),

    children: [
      {
        index: true,
        element: <Home />,
        loader:()=>fetch('http://localhost:3000/populer-courses')
      },
      {
        path:"/all-courses",
        element:<AllCourses/>,
        loader:()=>fetch('http://localhost:3000/courses')

      },
      {
        path:"/add-course",
        element:(<PrivateRouter>
          <AddCourseForm/>
        </PrivateRouter>)
      },
      {
        path:"/my-courses",
        element:(<PrivateRouter>
          <MyCourses/>
        </PrivateRouter>)
      },
      {
        path:"/my-enrolls",
        element:(<PrivateRouter>
          <MyEnrolls/>
        </PrivateRouter>)
      },
      {
        path:"/course-details/:id",
        element:(
          <PrivateRouter>
            <CourseDetails/>
          </PrivateRouter>
        ),
        loader:({params})=>fetch(`http://localhost:3000/courses/${params.id}`)
      },{
        path:"/update-course/:id",
        element:(
          <PrivateRouter>
            <UpdateCourse/>
          </PrivateRouter>
        ),
         loader:({params})=>fetch(`http://localhost:3000/courses/${params.id}`)
      },
      {
        path: "/login",
        element: <LogIn />,
      },

      {
        path: "/forger-password",
        element: <ForgerPassword />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/add-form",
        element: <AddCourseForm />,
      },
    ],
  },
]);

export default router;
