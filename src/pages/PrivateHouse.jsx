import House from "../components/private-house/house/House";
import Learn from "../components/learn/Learn";
import HousePhotos from "../components/photos/house-photos/HousePhotos";


const PrivateHouse = () => {
    return ( 
        <>
            <House descr={'фото объектов компании аирмастер г. челябинск'} 
                    title={'ВЕНТИЛЯЦИЯ В ЧАСТНОМ ДОМЕ (КОТТЕДЖЕ)'} 
                    text={'Мы монтировали климатические системы в коттеджах и частных бассейнах Челябинска (Родной, Благодатово, Лесной Остров, Карпов пруд, СмолVille, Западный, МалинкиVillage, с. Долгодеревенское, Закрытый поселок Еланчик), Чебаркульском районе, г. Миасс и даже в солнечном Сочи.'}/>
            <HousePhotos/>
            <Learn />
        </>
     );
}
 
export default PrivateHouse;