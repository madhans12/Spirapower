import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/SideBar";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Enquires from "./Pages/SalesTracker/Enquires/Enquires";
import "./App.css";
import User from "./Pages/User/User";

const App = () => {
  return (
    <div>
      <div className="app-container">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/enquires" element={<Enquires />} />
              <Route path="/User" element={<User />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
