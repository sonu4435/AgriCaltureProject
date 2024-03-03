import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import NotFound from "pages/NotFound";
import SignUp from "pages/SignUp";
import { auth } from "Server/FireBase/firebase";
import CustomerPage from "pages/CustomerPage/Dashboard/index";
import Home from "pages/CustomerPage/Home/index";
import CustomerRealHome from "pages/CustomerPage/RealHome";
import LoadingPage from "pages/LoaingPage";
import CategoriesPage from "pages/CustomerPage/Category";
import AddMenuPage from "pages/FarmerRegiPage";
const LandingPage = React.lazy(() => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("pages/LandingPage"));
    }, 5000);
  })
});


const ProjectRoutes = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("");


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
      } else {
        setUser("");
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe from the listener

    const windowUrl= window.locationbar.pathname;
    console.log(windowUrl);
  }, []);

  return (
    <React.Suspense fallback={<LoadingPage />}>
      <Router>
        {isAuthenticated ? <Routes>
          <Route path="/" element={<Navigate to={`/${user.uid}/home`} />} />
          <Route path="/Signup" element={<Navigate to={`/${user.uid}/home`} />} />
          <Route path={`/${user.uid}/orderhistory`} element={<Home userProps={user} />} />
          <Route path={`/${user.uid}/dashboard`} element={<CustomerPage userProps={user} />} />
          <Route path={`/${user.uid}/category`} element={<CategoriesPage userProps={user} />} />
          <Route path={`/${user.uid}/addproduct`} element={<AddMenuPage userProps={user} />} />
          <Route path={`/${user.uid}/home`} element={<CustomerRealHome userProps={user} />} />
          <Route path="*" element={<NotFound />} />
        </Routes> :
          <Routes>
            <Route path="/" element={<LandingPage user={user} />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path={`/${user.uid}/dashboard`} element={<Navigate to={"/"} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        }
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
