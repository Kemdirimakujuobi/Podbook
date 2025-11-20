import { useState, useEffect } from "react";
import App from "./App";
import { AdminUpload } from "./components/AdminUpload";

export function Router() {
  const [route, setRoute] = useState(window.location.hash.slice(1) || "/");

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.slice(1) || "/");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Route matching
  if (route === "/admin") {
    return <AdminUpload />;
  }

  // Default route - main player
  return <App />;
}
