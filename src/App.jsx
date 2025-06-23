import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import PageLayout from "./layout/PageLayout";
import AccueilPage from "./pages/AccueilPage";
import LocationPage from "./pages/LocationPage";
import AproposPage from "./pages/AproposPage";
import PageIntrouvable from "./pages/PageIntrouvable";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<Navigate to="/accueil" />} />
      <Route path="/accueil" element={<AccueilPage />} />
      <Route path="/location/:id" element={<LocationPage />} />
      <Route path="/apropos" element={<AproposPage />} />
      <Route path="/*" element={<PageIntrouvable />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
