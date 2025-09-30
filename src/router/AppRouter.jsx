import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { ROUTES, PUBLIC_ROUTES, PRIVATE_ROUTES } from "./routes";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Login = lazy(() => import("@/pages/Login"));
const Signup = lazy(() => import("@/pages/Signup"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const Account = lazy(() => import("@/pages/account/Account"));
const Profile = lazy(() => import("@/pages/account/Profile"));
const Subscription = lazy(() => import("@/pages/account/Subscription"));

const Dashboard = lazy(() => import("@/pages/dashboard/Dashboard"));
const Videos = lazy(() => import("@/pages/videos/Videos"));
const VideoDetail = lazy(() => import("@/pages/videos/VideoDetail"));
const VideoComments = lazy(() => import("@/pages/videos/VideoComments"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
  </div>
);

const AppRouter = () => {
  const { isAuthenticated } = { isAuthenticated: false };

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Public Routes */}
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />

        <Route
          path={ROUTES.LOGIN}
          element={
            isAuthenticated ? (
              <Navigate to={ROUTES.DASHBOARD} replace />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path={ROUTES.SIGNUP}
          element={
            isAuthenticated ? (
              <Navigate to={ROUTES.DASHBOARD} replace />
            ) : (
              <Signup />
            )
          }
        />

        {/* Account Nested Routes */}
        <Route
          path={ROUTES.ACCOUNT}
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        >
          {/* Default redirect to profile */}
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<Profile />} />
          <Route path="subscription" element={<Subscription />} />
        </Route>

        {/* Dashboard Nested Routes */}
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* Default redirect to videos */}
          <Route index element={<Navigate to="videos" replace />} />
          <Route path="videos" element={<Videos />} />
          <Route path="videos/:id" element={<VideoDetail />} />
          <Route path="videos/:id/comments" element={<VideoComments />} />
        </Route>

        {/* Catch-all 404 Route */}
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
