import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Admin,
  Register,
  Login,
  Error,
  DashboardLayout,
  Landing,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>,
      },
      {
        path: 'register',
        element: <Register/>,
      },
      {
        path: 'login',
        element: <Login/>,
      },
      {
        path: 'dashboard',
        element:<DashboardLayout/>,
        children:[
          {
            path: 'admin',
            element: <Admin />,
          },
        ]
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
