import Loading from 'components/Loading';
import Splash from 'components/Splash';
import AuthPreview from 'pages/auth/AuthPreview';
import PageNotFound from 'pages/PageNotFound';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom/dist/index';
import ForgottenPasswordPage from './pages/auth/ForgottenPasswordPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import {
  ROUTE_AUTH_PREVIEW,
  ROUTE_DASHBOARD,
  ROUTE_FORGOTTEN_PASSWORD,
  ROUTE_HOME,
  ROUTE_LANDING,
  ROUTE_LOADING,
  ROUTE_LOGIN,
  ROUTE_REGISTER,
  ROUTE_SPLASH,
} from './utils/contants';

const ProtectedRoute = ({
  isAllowed,
  redirectPath = ROUTE_SPLASH,
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path={ROUTE_SPLASH} element={<Splash />} />
      <Route index path={ROUTE_LOADING} element={<Loading />} />
      <Route path={ROUTE_LANDING} element={<LandingPage />} />

      <Route>
        <Route path={ROUTE_AUTH_PREVIEW} element={<AuthPreview />} />
        <Route path={ROUTE_LOGIN} element={<LoginPage />} />
        <Route path={ROUTE_REGISTER} element={<RegisterPage />} />
        <Route
          path={ROUTE_FORGOTTEN_PASSWORD}
          element={<ForgottenPasswordPage />}
        />
      </Route>

      <Route element={<ProtectedRoute isAllowed={/*!!user*/ false} />}>
        <Route path={ROUTE_HOME} element={<HomePage />} />
        <Route path={ROUTE_DASHBOARD} element={<Dashboard />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
