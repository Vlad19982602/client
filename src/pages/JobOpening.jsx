import Proposal from "../components/jobopening/proposal/Proposal";
import Requirements from "../components/jobopening/requirements/Requirements";
import Search from "../components/jobopening/search/Search";
import WhoAre from "../components/jobopening/whoarewe/WhoAre";


const JobOpening = () => {
    return ( 
        <>
            <Search/>
            <Requirements/>
            <Proposal/>
            <WhoAre/>
        </>
     );
}
 
export default JobOpening;