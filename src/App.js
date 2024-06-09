import Home from "./pages/Home";
import WeAll from "./pages/WeAll";
import HowWorked from "./pages/HowWorked";
import Contactes from "./pages/Contactes";
import Blogs from "./pages/Blogs";
import JobOpening from "./pages/JobOpening";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import VentProm from "./pages/VentProm";
import Groceries from "./pages/Groceries";


import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import PrivateHouse from "./pages/PrivateHouse";
import PromHouse from "./pages/PromHouse";
import AspHouse from "./pages/AspHouse";
import InterHouse from "./pages/InterHouse";
import JobHouse from "./pages/JobHouse";
import Dom from "./pages/Dom";

import Calculator from './components/main-page/calculator/Calculator';
import Register from './components/Register'

import Footer from './components/main-page/footer/Footer.jsx'
import Header from './components/main-page/header/Header.jsx'
import SubTitle from './components/main-page//subtitlePage/SubTitle.jsx'
import Scroll from './components/scroll'
import Modal from './components/main-page/modal/Modal.jsx'
import Login from './components/Login';
import Profile from './components/Profile';

// const AppContent = ({children}) => {
//   return (
//     <>
//         <Header />
//         <SubTitle />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       {children}
//     </>
//   );
// };

const Layout = ({ children }) => {
  const location = useLocation();
  const showHeaderAndSubTitle = location.pathname !== '/register' && location.pathname !== '/login';

  return (
    <div>
      {showHeaderAndSubTitle && <Header />}
      {showHeaderAndSubTitle && <SubTitle />}
      {children}
    </div>
  );
};

const LayoutFooter = ({ children }) => {
  const location = useLocation();
  const showHeaderAndSubTitle = location.pathname !== '/register' && location.pathname !== '/login';

  return (
    <div>
			{showHeaderAndSubTitle && <Footer />} 
      {children}
    </div>
  );
};

function App() {

  return (
    <Router>
      <div className="App">
        <Scroll />
        <Modal />
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/about-us" element={<Layout><WeAll /></Layout>} />
          <Route path="/vent-prom" element={<Layout><VentProm /></Layout>} />
          <Route path="/dom" element={<Layout><Dom /></Layout>} />
          <Route path="/groceries" element={<Layout><Groceries /></Layout>} />
          <Route path="/calculator" element={<Layout><Calculator /></Layout>} />
          <Route path="/private-house" element={<Layout><PrivateHouse /></Layout>} />
          <Route path="/prom-house" element={<Layout><PromHouse /></Layout>} />
          <Route path="/asp-house" element={<Layout><AspHouse /></Layout>} />
          <Route path="/inter-house" element={<Layout><InterHouse /></Layout>} />
          <Route path="/job-house" element={<Layout><JobHouse /></Layout>} />


          
          <Route path="/how-work" element={<Layout><HowWorked /></Layout>} />
          <Route path="/contact" element={<Layout><Contactes /></Layout>} />
          <Route path="/blog" element={<Layout><Blogs /></Layout>} />
          <Route path="/resume" element={<Layout><JobOpening /></Layout>} />

          <Route path="/service" element={<Layout><Service /></Layout>} />
          <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        </Routes>
        <LayoutFooter/>
      </div>
    </Router>
  );
}

export default App;
