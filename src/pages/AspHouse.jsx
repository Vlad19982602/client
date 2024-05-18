import LearnProm from "../components/learn/LearnProm";
import House from "../components/private-house/house/House";
import CalculatorMore from "../components/main-page/calculator/CalculatorMore";
import AspPhotos from "../components/photos/asp-photos/AspPhotos";


const AspHouse = () => {
    return ( 
        <>
            <House descr={'фото объектов компании аирмастер г. челябинск'} 
                    title={'СИСТЕМЫ АСПИРАЦИИ НА ПРОИЗВОДСТВЕ'} 
                    text={'Аспирационная установка необходима для очистки воздуха от сухих частиц (например мелких частиц пыли, опилок) и от твердых каплеобразных.'} />
            <AspPhotos/>
            <LearnProm title={'Вентиляция на производстве'}/>
            <CalculatorMore/>
        </>
     );
}
 
export default AspHouse;