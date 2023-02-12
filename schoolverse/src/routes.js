import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter,createRoutesFromElements, RouterProvider, Route, Outlet} from "react-router-dom/dist/index";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<Landing />} />
            <Route path="landing" element={<Landing />} />
 
            <Route>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="forgot_pass" element={<Forgotten_password />} />
            </Route>

            <Route element={<ProtectedRoute isAllowed={!!user} />}>
                <Route path="home" element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>

            <Route path="*" element={ <NoMatch />} />
        </Route>
    )
  );

  const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/landing',
    children,
  }) => {
    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
  };
  
  const NoMatch = () => {
    return (<p>There's nothing here: 404!</p>);
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );