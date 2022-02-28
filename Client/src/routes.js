import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import SystemHealth from './pages/SystemHealth';
import Settings from './pages/Settings';
import DashboardApp from './pages/DashboardApp';
import SensorData from './pages/SensorData';
import LiveCamera from './pages/LiveCamera';
import EventViewer from './pages/EventViewer';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'SensorData', element: <SensorData /> },
        { path: 'LiveCamera', element: <LiveCamera /> },
        { path: 'Settings', element: <Settings /> },
        { path: 'SystemHealth', element: <SystemHealth /> },
        { path: 'EventViewer', element: <EventViewer /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
