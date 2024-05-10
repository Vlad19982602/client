import './goTop.css'

const GoTop = (props) => {

    return (
      <>
        <div className={props.showGoTop} onClick={props.scrollUp}>
            <button className="goTop">
                <i className="goTop__text fas fa-chevron-up">
                  <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#198754">

                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.576"> 
                      <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#198754" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
                    </g>

                    <g id="SVGRepo_iconCarrier"> 
                      <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#198754" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
                    </g>

                  </svg>
                </i>
            </button>
        </div>
      </>
    );
  };
  export default GoTop;