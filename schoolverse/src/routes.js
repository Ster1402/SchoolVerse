import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from 'react-router-dom/dist/index';
import ForgottenPasswordPage from './pages/auth/ForgottenPasswordPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import {
  ROUTE_DASHBOARD,
  ROUTE_FORGOTTEN_PASSWORD,
  ROUTE_HOME,
  ROUTE_LANDING,
  ROUTE_LOGIN,
  ROUTE_REGISTER,
} from './utils/contants';

const ProtectedRoute = ({
  isAllowed,
  redirectPath = ROUTE_LANDING,
  children,
}) => {
  // if (!isAllowed) {
  //   return <Navigate to={redirectPath} replace />;
  // }

  return children ? children : <Outlet />;
};

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index path={ROUTE_LANDING} element={<LandingPage />} />

      <Route>
        <Route path={ROUTE_LOGIN} element={<LoginPage />} />
        <Route path={ROUTE_REGISTER} element={<RegisterPage />} />
        <Route
          path={ROUTE_FORGOTTEN_PASSWORD}
          element={<ForgottenPasswordPage />}
        />
      </Route>

      <Route element={<ProtectedRoute isAllowed={/*!!user*/ true} />}>
        <Route path={ROUTE_HOME} element={<HomePage />} />
        <Route path={ROUTE_DASHBOARD} element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NoMatch />} />
    </Route>
  )
);