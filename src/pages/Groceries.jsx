import GMain from "../components/groceries/groc-main/GMain";
import GOffer from "../components/groceries/groc-offer/GOffer";
import GrocPrimary from "../components/groceries/groc-primary/GrocPrimary";

const Groceries = () => {
    return ( 
        <>
            <GMain/>
            <GrocPrimary/>
            <GOffer/>
        </>
     );
}
 
export default Groceries;