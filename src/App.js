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

const Layout = ({ children }) => {
  const location = useLocation();
  const showHeaderAndSubTitle = location.pathname !== '/register';

  return (
    <div>
			{showHeaderAndSubTitle && <Scroll />}
			{showHeaderAndSubTitle && <Modal />}
      {showHeaderAndSubTitle && <Header />}
      {showHeaderAndSubTitle && <SubTitle />}
			{/* {showHeaderAndSubTitle && <Footer />}  */}
      {children}
    </div>
  );
};

const LayoutFooter = ({ children }) => {
  const location = useLocation();
  const showHeaderAndSubTitle = location.pathname !== '/register';

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
        <Modal/>
        <Layout/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<WeAll />} />
          <Route path="/vent-prom" element={<VentProm />} />
          <Route path="/dom" element={<Dom />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/private-house" element={<PrivateHouse />} />
          <Route path="/prom-house" element={<PromHouse />} />
          <Route path="/asp-house" element={<AspHouse />} />
          <Route path="/inter-house" element={<InterHouse />} />
          <Route path="/job-house" element={<JobHouse />} />


          
          <Route path="/how-work" element={<HowWorked />} />
          <Route path="/contact" element={<Contactes />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/resume" element={<JobOpening />} />

          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <LayoutFooter/>
      </div>
    </Router>
  );
}

export default App;
