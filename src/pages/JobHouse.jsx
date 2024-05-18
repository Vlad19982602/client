import LearnJob from "../components/learn/LearnJob";
import Calculator from "../components/main-page/calculator/Calculator";
import JobPhotos from "../components/photos/job-photos/JobPhotos";
import House from "../components/private-house/house/House";


const JobHouse = () => {
    return ( 
        <>
            <House descr={'фото объектов компании аирмастер г. челябинск'} 
                    title={'МОНТАЖ СИСТЕМ ВЕНТИЛЯЦИИ'} 
                    text={'Системы вентиляции и аспирации состоят из множества агрегатов (вентиляторы, воздухонагреватели, фильтры, воздуховоды, шумоглушители и др.). <br/>  От качества монтажа напрямую зависит эффективность системы. Наши монтажные бригады имеют нужный уровень знаний и навыков, способны провести долговечный и качественный монтаж любых климатических систем.'} />
            <JobPhotos/>
            <LearnJob/>
            <Calculator/>
        </>
     );
}
 
export default JobHouse;