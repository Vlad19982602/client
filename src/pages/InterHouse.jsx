import Learn from "../components/learn/Learn";
import Calculator from "../components/main-page/calculator/Calculator";
import InterPhotos from "../components/photos/inter-photos/InterPhotos";
import House from "../components/private-house/house/House";

const InterHouse = () => {
    return ( 
        <>
            <House descr={'фото объектов компании аирмастер г. челябинск'} 
                    title={'ВЕНТИЛЯЦИЯ И КОНДИЦИОНЕРЫ В ИНТЕРЬЕРЕ'} 
                    text={'Мы монтировали климатические системы в квартирах и частных домах Челябинска и области; выполняли объекты в фитнес-центрах, ресторанах, барах, офисных и торговых помещениях, медицинских учреждениях, бассейнах и на производстве.'} />
            <InterPhotos/>
            <Learn/>
            <Calculator/>
        </>
     );
}
 
export default InterHouse;