import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import HomePage from './pages/HomePage';
import PsychometricTestPage from './pages/PsychometricTestPage';
import CounselingPage from './pages/CounselingPage';
import ContactPage from './pages/ContactPage';
import SiteLayout from './components/layout/SiteLayout';

const rootRoute = createRootRoute({
  component: () => (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const psychometricTestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/psychometric-test',
  component: PsychometricTestPage,
});

const counselingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/counseling',
  component: CounselingPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  psychometricTestRoute,
  counselingRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

export default function App() {
  return <RouterProvider router={router} />;
}
