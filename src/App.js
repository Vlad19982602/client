import Calculator from './components/calculator/Claculator';
import Decoration from './components/decoration/Decoration';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Modal from './components/modal/Modal';
import Slider from './components/slider/Slider';
import SliderContent from './components/slider/SliderContent';
import Services from './components/services/Services';
import ServicesMore from './components/services/ServicesMore';
import Geographics from './components/geographics/Geographics';
import SubTitle from './components/subtitlePage/SubTitle';
import GoTop from './components/topButton/GoTop';
import Customers from './components/customers/Customers';
import Contacts from './components/contacts/Contacts';


import { useEffect, useState, useRef } from 'react';

function App() {

  const [open, setOpen] = useState(true);

  const handleOpenModal = () => {
    if(!open) {
      setTimeout(() => {
        setOpen(true);
      }, 6000);
    }
  };

  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState("goTopHidden");
  const refScrollUp = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  function handleVisibleButton() {
    const position = window.scrollY;
    setSrollPosition(position);

    if (scrollPosition > 400) {
      return setshowGoTop("goTop");
    } else if (scrollPosition < 400) {
      return setshowGoTop("goTopHidden");
    }
  }

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
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
    {/* onAnimationEnd={animation} */}
      <div timer={() => handleOpenModal}/> 
      <div ref={refScrollUp}> </div>
      <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
      <Modal open={open} setOpen={setOpen}/>
      <Header/>
      <SubTitle/>
      <Main/>
      <Calculator/>
      <Decoration title={"РАБОТАЕМ С ОБЪЕКТАМИ ЛЮБОЙ СЛОЖНОСТИ"}/>
      <Slider/>
      <SliderContent />
      <Services/>
      <Decoration title={"ВИДЫ УСЛУГ"}/>
      <ServicesMore/>
      <Decoration title={"ГЕОГРАФИЯ ОБЪЕКТОВ"}/>
      <Geographics/>
      <Decoration title={"НАШИ ЗАКАЗЧИКИ"}/>
      <Customers/>
      <Decoration title={"КАК НАС НАЙТИ"}/>
      <Contacts/>
    </div>
  );
}

export default App;
