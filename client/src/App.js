import {Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./Common/Navbar";
import ParticlesComponent from "./components/Particles";
//import DashboardPage from "./pages/Dashboard";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
// import PrivaiteRoute from "./PrivaiteRoute";
// import EditPage from "./pages/EditPage";
// import AddProject from "./pages/AddProject";
import LoginPage from "./pages/Login";
import RegisterePage from "./pages/Registere";
import CertificatesPage from "./pages/Certificates";
import AddProject from "./pages/AddProject";
import DashboardPage from "./pages/Dashboard";
import EditPage from "./pages/EditPage";
import PrivaiteRoute from "./PrivaiteRoute";
import { useEffect, useState } from "react";
import { login } from "./redux/actions/auth";
import { connect } from "react-redux";
import NavbarModal from "./components/NavbarModal";

function App({isAdmin, dispatch}) {
  const [userAuth, setUserAuth] = useState(JSON.parse(localStorage.getItem('user')))
  const [openModalNavbar, setOpenModalNavbar] = useState(false)
  useEffect(()=>{    
    if(userAuth){
      dispatch(login(userAuth.token,userAuth.isAdmin))
    }
  },[userAuth])
  return (
    <div className="App bg-slate-900 text-white">
      <main className="flex flex-col gap-8 mx-4">
        <Navbar setUserAuth={setUserAuth} setOpenModalNavbar={setOpenModalNavbar}/>
        {openModalNavbar && <NavbarModal setOpenModalNavbar={setOpenModalNavbar}/>}
        <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/loggin" element={!userAuth ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/registere" element={!userAuth? <RegisterePage /> : <Navigate to="/" />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/dashboard/AddProject" element={
            <PrivaiteRoute>
              <AddProject />
            </PrivaiteRoute>
          } />
          <Route path="/dashboard/edit/:id" element={
          <PrivaiteRoute>
          <EditPage />
          </PrivaiteRoute>
          } />          
          <Route
            path="/dashboard"
            element={
              <PrivaiteRoute>
              <DashboardPage />
              </PrivaiteRoute>
            }
          />
          
        </Routes>
      </main>
      <ParticlesComponent />
    </div>
  );
}


export default connect() (App);


/* 

<Route path="/Login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivaiteRoute>
                <DashboardPage />
              </PrivaiteRoute>
            }
          />
          <Route path="/dashboard/add" element={<AddProject />} />
*/