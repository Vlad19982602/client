import GoTop from "./main-page/topButton/GoTop";

import { useEffect, useState, useRef } from "react";

const Scroll = () => {
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
        <>
            <div ref={refScrollUp}> </div>
            <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
        </>
      );
}
 
export default Scroll;