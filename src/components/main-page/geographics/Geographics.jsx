import './geographics.css'

const Geographics = () => {
    return (
        <>
        {/* Geographics */}
            <section className="geographics">
                <div className="container geographics__centeredContainer">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 geographics-wrapper">
                            <iframe title="Geographics"
                                width="100%"
                                height="452px"
                                src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&source=constructor-api&um=constructor%3A23bf323bc6b7a206319040221d674dd988054a2922202ab92602b545401bfc81"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
      );
}
 
export default Geographics;