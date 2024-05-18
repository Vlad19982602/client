import Header from "./components/main-page/header/Header";
import Modal from "./components/main-page/modal/Modal";
import SubTitle from "./components/main-page/subtitlePage/SubTitle";
import Footer from "./components/main-page/footer/Footer";

import Scroll from "./components/scroll";

import Home from "./pages/Home";
import WeAll from "./pages/WeAll";
import HowWorked from "./pages/HowWorked";
import Contactes from "./pages/Contactes";
import Blogs from "./pages/Blogs";
import JobOpening from "./pages/JobOpening";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";

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

function App() {
  const [open, setOpen] = useState(true);

  const handleOpenModal = () => {
    if (!open) {
      setTimeout(() => {
        open(true);
      }, 6000);
    }
  };



  // const [anim, setAnim] = useState(true);

  //   const animation = () => {
  //     const animItems = document.querySelectorAll('._anim-items');

  //     if(animItems.length > 0) {
  //         window.addEventListener('scroll', animOnScroll);
  //         function animOnScroll() {
  //             for(let index = 0; index< animItems.length; index++) {
  //                 const animItem = animItems[index];
  //                 const animItemHeight = animItem.offsetHeight;
  //                 const animItemOffset = offset(animItem).top;
  //                 const animStart = 4;

  //                 let animItemPoint = window.innerHeight - animItemHeight / animStart;
  //                 if(animItemHeight > window.innerHeight) {
  //                     animItemPoint = window.innerHeight - window.innerHeight / animStart;
  //                 }

  //                 if((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight )) {
  //                     animItem.classList.add('active');
  //                 } else {
  //                     if(!animItem.classList.contains('_anim-no-hide')) {
  //                         animItem.classList.remove('active');
  //                     }
  //                 }
  //             }
  //         }

  //         function offset(el) {
  //             const rect = el.getBoundingClientRect(),
  //                 scrollLeft = window.scrollX || document.documentElement.scrollLeft,
  //                 scrollTop = window.scrollY || document.documentElement.scrollTop;
  //             return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  //         }

  //         animOnScroll();
  //     }
  // }

  return (
    <div className="App">
      <Router>
        <Scroll />
        <Modal open={open} setOpen={setOpen} timer={handleOpenModal} />
        <Header />
        <SubTitle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<WeAll />} />
          <Route path="/vent-prom" element={<VentProm />} />
          <Route path="/dom" element={<Dom />} />
          <Route path="/groceries" element={<Groceries />} />
          
          
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
        {/* <Home />         */}
        {/* <Company /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
