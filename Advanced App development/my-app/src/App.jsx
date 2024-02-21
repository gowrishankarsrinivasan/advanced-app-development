// import React from "react";
// import Signup from "./Pages/login/signUp";
// import { Navigate, Routes, Route } from "react-router-dom";
import LazyLayout from "./Components/LazyLayout";
// import Login from "./Pages/login/login";
// const LazyLogin = lazy(() => {
//   import("./Pages/login/login");
// });
// const LazyHome = lazy(() => {
//   import("./Pages/User/About");
// });
// const LazyDashBoard = lazy(() => {
//   import("./Pages/Admin/DashBoard");
// });

// const UserRoutes = () => {
//   return (
//     <userLayout>
//       <Routes>
//         <Route path="/home" element={LazyHome} />
//       </Routes>
//     </userLayout>
//   );
// };
// const AdminRoutes = () => {
//   return (
//     <Routes>
//       <Route path="./dashboard" element={LazyDashBoard} />
//       <Route path="./userInfo" element={LazyUserInfo} />
//     </Routes>
//   );
// };
// const App = () => {
//   return (
//     <Routes>
//       <Route exact path="/" element={<Navigate to="/routeTo/login" />} />
//       <Route
//         exact
//         path="/routeTo/login"
//         element={<LazyLayout component={LazyLogin} />}
//       />
//       <Route exact path="/routeTo/user/*" element={LazyHome} />
//       <Route exact path="/routeTo/user/*" element={UserRoutes} />
//     </Routes>
//   );
// };

import React, { lazy, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import UserLayout from "../src/Pages/User/UserLayout";
import Homepage from "./Pages/User/homepage";
import Navbar from "./Pages/User/Navbar";

const LazyLogin = lazy(() => import("./Pages/login/login"));
const LazysignUp = lazy(() => import("./Pages/login/signUp"));
const LazyHome = lazy(() => import("./Pages/User/homepage"));

const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome}/>} />
      </Routes>
    </UserLayout>
  );
};

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<h1>loading...</h1>}>
        <Routes>
          <Route exact path="/" element={<Navigate to="/routeTo/signUp" />} />
          <Route exact path="/homepage" element={<Homepage/>} />
          <Route exact path="/routeTo/navbar" element={<Navbar/>} />
          <Route
            exact
            path="/routeTo/login"
            element={<LazyLogin />}
          />
          <Route
            exact
            path="/routeTo/signUp"
            element={<LazysignUp/>}
          />
          <Route path="/user/*" element={<UserRoutes/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
