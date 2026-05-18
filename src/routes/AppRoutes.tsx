import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/templates/Layout/Layout";
import DashboardPage from "../components/pages/DashboardPage/DashboardPage";
import GuestBookPage from "../components/pages/GuestBookPage/GuestBookPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="/" element={<GuestBookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
