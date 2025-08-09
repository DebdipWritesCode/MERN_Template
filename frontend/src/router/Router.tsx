// import Login from "@/pages/Auth/Login";
// import Signup from "@/pages/Auth/Signup";
// import VerifyEmail from "@/pages/Auth/VerifyEmail";
// import NotFound from "@/pages/NotFound";
// import { Route, Routes } from "react-router-dom";

// import DashboardLayout from "@/layouts/DashboardLayout";
// import ProtectedRoute from "./ProtectedRoute";
// import Landing from "@/pages/Landing";
// import Dashboard from "@/pages/Dashboard";

// const Router = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Landing />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/verify" element={<VerifyEmail />} />

//       <Route
//         element={
//           <ProtectedRoute>
//             <DashboardLayout />
//           </ProtectedRoute>
//         }
//       >
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Route>

//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default Router;

// src/router/Router.tsx
import Auth from "@/pages/Auth/Auth";
import VerifyEmail from "@/pages/Auth/VerifyEmail";
import NotFound from "@/pages/NotFound";
import { Route, Routes } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import Landing from "@/pages/Landing";
import Dashboard from "@/pages/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      {/* Use single Auth page for both routes; initial panel chosen via prop */}
      <Route path="/login" element={<Auth mode="signin" />} />
      <Route path="/signup" element={<Auth mode="signup" />} />
      <Route path="/register" element={<Auth mode="signup" />} />

      <Route path="/verify" element={<VerifyEmail />} />

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
