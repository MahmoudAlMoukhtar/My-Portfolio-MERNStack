import React, {useEffect, useState} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./Common/Navbar";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
import LoginPage from "./pages/Login";
import RegisterePage from "./pages/Registere";
import CertificatesPage, {Certificate} from "./pages/Certificates";
import {login} from "./redux/actions/auth";
import {connect} from "react-redux";
import NavbarModal from "./components/NavbarModal";
import Footer from "./Common/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PrivaiteRoute from "./PrivaiteRoute";
import {AnimatePresence} from "framer-motion";

function App({isAdmin, dispatch}) {
  const [userAuth, setUserAuth] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [openModalNavbar, setOpenModalNavbar] = useState(false);
  useEffect(() => {
    if (userAuth) {
      dispatch(login(userAuth.token, userAuth.isAdmin));
    }
  }, [userAuth]);
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="App bg-[#1d1d1d] text-white">
        <main className="flex flex-col gap-8 py-14">
          <Navbar />
          {openModalNavbar && (
            <NavbarModal setOpenModalNavbar={setOpenModalNavbar} />
          )}
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/loggin"
                element={!userAuth ? <LoginPage /> : <Navigate to="/" />}
              />
              <Route
                path="/registere"
                element={!userAuth ? <RegisterePage /> : <Navigate to="/" />}
              />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route
                path="/certificates"
                element={<CertificatesPage page={true} />}
              />
            </Routes>
          </AnimatePresence>
          <Footer />
        </main>
      </div>
    </React.Fragment>
  );
}

export default connect()(App);
