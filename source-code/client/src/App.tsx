/*
Design philosophy: Utility Modernism with Australian Trade Vernacular.
This routing file preserves the bilingual site structure while keeping the existing English homepage unchanged and adding dedicated Chinese SEO routes.
Question for every routing decision: Does this choice reinforce or dilute our design philosophy?

P5 Optimization: All /zh/* routes are lazy-loaded via React.lazy + Suspense.
This removes ~28 KiB of unused JS from the initial bundle when users land on the English homepage.
*/

import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// Eagerly loaded (always needed)
const NotFound = lazy(() => import("@/pages/NotFound"));

// Lazy-loaded Chinese routes - only fetched when user navigates to /zh/*
const ZhHome = lazy(() => import("@/pages/ZhHome"));
const Burwood = lazy(() => import("@/pages/zh/Burwood"));
const Chatswood = lazy(() => import("@/pages/zh/Chatswood"));
const Eastwood = lazy(() => import("@/pages/zh/Eastwood"));
const EppingRyde = lazy(() => import("@/pages/zh/EppingRyde"));
const Hurstville = lazy(() => import("@/pages/zh/Hurstville"));
const BlockedDrains = lazy(() => import("@/pages/zh/BlockedDrains"));
const Gas = lazy(() => import("@/pages/zh/Gas"));
const HotWater = lazy(() => import("@/pages/zh/HotWater"));
const LeakRepair = lazy(() => import("@/pages/zh/LeakRepair"));

function CanonicalRedirect({ to }: { to: string }) {
  const [, navigate] = useLocation();

  useEffect(() => {
    navigate(to, { replace: true });
  }, [navigate, to]);

  return null;
}

function RedirectToZhHome() {
  return <CanonicalRedirect to="/zh" />;
}

function RedirectToBlockedDrains() {
  return <CanonicalRedirect to="/zh/blocked-drains" />;
}

function RedirectToHotWater() {
  return <CanonicalRedirect to="/zh/hot-water" />;
}

function RedirectToGas() {
  return <CanonicalRedirect to="/zh/gas" />;
}

// Minimal loading fallback - keeps the page background color to avoid flash
function PageLoader() {
  return (
    <div style={{ minHeight: "100vh", background: "#faf8f5" }} aria-hidden="true" />
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/zh"} component={ZhHome} />
        <Route path={"/zh/"} component={ZhHome} />
        <Route path={"/zh/sydney-plumber"} component={RedirectToZhHome} />
        <Route path={"/zh/blocked-drains"} component={BlockedDrains} />
        <Route path={"/zh/blocked-drain"} component={RedirectToBlockedDrains} />
        <Route path={"/zh/roof-stormwater-drainage"} component={RedirectToBlockedDrains} />
        <Route path={"/zh/hot-water"} component={HotWater} />
        <Route path={"/zh/hot-water-repair"} component={RedirectToHotWater} />
        <Route path={"/zh/gas"} component={Gas} />
        <Route path={"/zh/gas-fitter"} component={RedirectToGas} />
        <Route path={"/zh/leak-repair"} component={LeakRepair} />
        <Route path={"/zh/areas/eastwood"} component={Eastwood} />
        <Route path={"/zh/areas/chatswood"} component={Chatswood} />
        <Route path={"/zh/areas/hurstville"} component={Hurstville} />
        <Route path={"/zh/areas/burwood"} component={Burwood} />
        <Route path={"/zh/areas/epping-ryde"} component={EppingRyde} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
