import Calculator from './components/calculator/Claculator';
import Decoration from './components/decoration/Decoration';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Modal from './components/modal/Modal';
import SubTitle from './components/subtitlePage/SubTitle';
import GoTop from './components/topButton/GoTop';
import { useEffect, useState, useRef } from 'react';




function App() {

  
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



  return (
    <div className="App">
      <div ref={refScrollUp}> </div>
      <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
      <Modal />
      <Header/>
      <SubTitle/>
      <Main/>
      <Calculator/>
      <Decoration/>
    </div>
  );
}

export default App;
