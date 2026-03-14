import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect } from "react";
import SiteLayout from "./components/layout/SiteLayout";
import CareerPlanning1112Page from "./pages/CareerPlanning1112Page";
import ContactPage from "./pages/ContactPage";
import CounselingPage from "./pages/CounselingPage";
import HomePage from "./pages/HomePage";
import PsychometricTestPage from "./pages/PsychometricTestPage";
import StreamCareer810Page from "./pages/StreamCareer810Page";

function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname change should trigger scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

const rootRoute = createRootRoute({
  component: () => (
    <SiteLayout>
      <ScrollToTop />
      <Outlet />
    </SiteLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const streamCareer810Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/stream-career-8-10",
  component: StreamCareer810Page,
});

const careerPlanning1112Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/career-planning-11-12",
  component: CareerPlanning1112Page,
});

const psychometricTestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/psychometric-test",
  component: PsychometricTestPage,
});

const counselingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/counseling",
  component: CounselingPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  streamCareer810Route,
  careerPlanning1112Route,
  psychometricTestRoute,
  counselingRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

export default function App() {
  return <RouterProvider router={router} />;
}
