import LazyLayout from "./Components/LazyLayout";
import React, { lazy, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./Components/spinning";

//user login and signup routes
const LazyLogin = lazy(() => import("./Pages/login/login"));
const LazysignUp = lazy(() => import("./Pages/login/signUp"));
const lazyForgot = lazy(() => import("./Pages/login/forgotPassword"));

//user page routes
import UserLayout from "../src/Pages/User/UserLayout";
const LazyHome = lazy(() => import("./Pages/User/homepage"));
const LazyProfile = lazy(() => import("./Pages/User/Profile"));
const LazyCourseListing = lazy(() => import("./Pages/User/Course"));
const LazyQuery = lazy(() => import("./Pages/User/enquiry"));
const lazyPaymentPage = lazy(() => import("./Pages/User/payment"));
const LazyCourseForm = lazy(() => import("./Pages/Admin/courseForm"));
const LazyQueryTable = lazy(() => import("./Pages/instructor/instructor"));
//admin page routes
import AdminLayout from "./Pages/Admin/AdminLayout";
const LazyDash = lazy(() => import("./Pages/Admin/dash"));
// const LazyQueryReply = lazy(() => import("./Pages/instructor/instructor"));
const lazyAdminCourseForm = lazy(() => import("./Pages/Admin/courseForm"));
const LazyQueryReply = lazy(() => import("./Pages/User/Queryreply"));
const UserRoutes = () => {
  return (
    <UserLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/home" element={<LazyLayout component={LazyHome} />} />
          <Route
            path="/courseList"
            element={<LazyLayout component={LazyCourseListing} />}
          />
          <Route
            path="/profile"
            element={<LazyLayout component={LazyProfile} />}
          />
          <Route path="/query" element={<LazyLayout component={LazyQuery} />} />
          <Route
            path="/courseform"
            element={<LazyLayout component={LazyCourseForm} />}
          />
          <Route
            path="/payment"
            element={<LazyLayout component={lazyPaymentPage} />}
          />
          <Route
            path="/QueryReply"
            element={<LazyLayout component={LazyQueryReply} />}
          />
        </Routes>
      </Suspense>
    </UserLayout>
  );
};
const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route
            path="/dashboard"
            element={<LazyLayout component={LazyDash} />}
          />
          <Route
            path="/courseAddForm"
            element={<LazyLayout component={lazyAdminCourseForm} />}
          />
          <Route
            path="/reply"
            element={<LazyLayout component={LazyQueryTable} />}
          />
        </Routes>
      </Suspense>
    </AdminLayout>
  );
};

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route exact path="/" element={<Navigate to="/bec.com/login" />} />
          <Route
            exact
            path="/bec.com/login"
            element={<LazyLayout component={LazyLogin} />}
          />
          <Route
            exact
            path="/forgot-password"
            element={<LazyLayout component={lazyForgot} />}
          />
          <Route exact path="/bec.com/signUp" element={<LazysignUp />} />
          <Route path="/bec.com/user/*" element={<UserRoutes />} />
          <Route path="/bec.com/admin/*" element={<AdminRoutes />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
