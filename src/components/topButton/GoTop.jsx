import './goTop.css'

const GoTop = (props) => {

    return (
      <>
        <div className={props.showGoTop} onClick={props.scrollUp}>
            <button className="goTop">
                <i className="goTop__text fas fa-chevron-up">
                    <div className='goTop__arrow'>↑</div>
                </i>
            </button>
        </div>
      </>
    );
  };
  export default GoTop;