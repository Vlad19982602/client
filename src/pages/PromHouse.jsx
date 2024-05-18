import House from "../components/private-house/house/House";
import Calculator from "../components/main-page/calculator/Calculator";
import LearnProm from "../components/learn/LearnProm";
import PromPhotos from "../components/photos/prom-photos/PromPhotos";


const PromHouse = () => {
    return ( 
        <>
            <House descr={'фото объектов компании аирмастер г. челябинск'} 
                    title={'ВЕНТИЛЯЦИЯ ПРОМЫШЛЕННЫХ ПОМЕЩЕНИЙ'} 
                    text={'Вентиляционное оборудование в промышленных помещениях устранит излишнее тепло, пыль, вредные токсичные газы и обеспечит подачу чистого свежего воздуха. Это позволит повысить эффективность работы сотрудников и обеспечить безопасные условия труда.'}/>
            <PromPhotos/>
            <LearnProm title={'Вентиляция производственных помещений'}/>
            <Calculator/>
        </>
     );
}
 
export default PromHouse;