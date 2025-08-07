import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "./api/axios";
import { setAccessToken, clearAccessToken } from "./slices/authSlice";
import type { RootState } from "./redux/store";
import Router from "./router/Router";
import { useNavigate } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const loading = useSelector((state: RootState) => state.auth.loading);

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const res = await axios.post("/auth/refresh_access_token", {}, { withCredentials: true }); // ✅ Ensure this
        dispatch(setAccessToken(res.data));
      } catch {
        dispatch(clearAccessToken());
      }
    };
    refreshToken();
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      if (accessToken) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    }
  }, [accessToken, loading, navigate]);

  if (loading) return <div>Loading...</div>; // 👈 Don't render anything until we know

  return <Router />;
};

export default App;
