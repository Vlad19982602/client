import Calculator from './components/calculator/Claculator';
import Header from './components/header/Header';
import Main from './components/main/Main';
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
    const position = window.pageYOffset;
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
      <Header/>
      <SubTitle/>
      <Main/>
      <Calculator/>
    </div>
  );
}

export default App;
