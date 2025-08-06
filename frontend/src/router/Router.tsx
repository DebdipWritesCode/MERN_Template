import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import VerifyEmail from "@/pages/Auth/VerifyEmail";
import NotFound from "@/pages/NotFound";
import { Route, Routes } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import Landing from "@/pages/Landing";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify" element={<VerifyEmail />} />

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Define your protected routes here */}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
