import LazyLayout from "./Components/LazyLayout";
import React, { lazy, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import UserLayout from "../src/Pages/User/UserLayout";
import LoadingSpinner from "./Components/spinning";
// import Dashboard from "./Pages/Admin/dash";

const LazyLogin = lazy(() => import("./Pages/login/login"));
const LazysignUp = lazy(() => import("./Pages/login/signUp"));
const LazyHome = lazy(() => import("./Pages/User/homepage"));
const LazyProfile = lazy(() => import("./Pages/User/Profile"));

const LazyCourseListing = lazy(() => import("./Pages/User/Course"));
const LazyDash = lazy(() => import("./Pages/Admin/dash"));
const LazyQuery = lazy(() => import("./Pages/User/enquiry"));
const lazyAdminCourseForm = lazy(() => import("./Pages/Admin/courseForm"));
const lazyPaymentPage = lazy(() => import("./Pages/User/payment"));
const LazyQueryReply = lazy(()=> import("./Pages/instructor/instructor"));
const UserRoutes = () => {
  return (
    <UserLayout>
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
        <Route
          path="/dashboard"
          element={<LazyLayout component={LazyDash} />}
        />
        <Route path="/query" element={<LazyLayout component={LazyQuery} />} />
        <Route
          path="/courseform"
          element={<LazyLayout component={lazyAdminCourseForm} />}
        />
        <Route
          path="/payment"
          element={<LazyLayout component={lazyPaymentPage} />}
        />
        <Route
          path="/reply"
          element={<LazyLayout component={LazyQueryReply} />}
        />
      </Routes>
    </UserLayout>
  );
};
// const AdminRoutes = () => {
//   return (
//     <UserLayout>
//       <Routes>
//         <Route
//           path="/dashboard"
//           element={<LazyLayout component={LazyDashboard} />}
//         />
//       </Routes>
//     </UserLayout>
//   );
// };

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route exact path="/" element={<Navigate to="/routeTo/login" />} />
          <Route
            exact
            path="/routeTo/login"
            element={<LazyLayout component={LazyLogin} />}
          />
          <Route exact path="/routeTo/signUp" element={<LazysignUp />} />
          <Route path="/user/*" element={<UserRoutes />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
