/*
Design philosophy: Utility Modernism with Australian Trade Vernacular.
This routing file preserves the bilingual site structure while keeping the existing English homepage unchanged and adding dedicated Chinese SEO routes.
Question for every routing decision: Does this choice reinforce or dilute our design philosophy?
*/

import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Burwood from "@/pages/zh/Burwood";
import Chatswood from "@/pages/zh/Chatswood";
import Eastwood from "@/pages/zh/Eastwood";
import EppingRyde from "@/pages/zh/EppingRyde";
import Hurstville from "@/pages/zh/Hurstville";
import BlockedDrains from "@/pages/zh/BlockedDrains";
import Gas from "@/pages/zh/Gas";
import HotWater from "@/pages/zh/HotWater";
import LeakRepair from "@/pages/zh/LeakRepair";
import ZhHome from "@/pages/ZhHome";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

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

function Router() {
  return (
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
