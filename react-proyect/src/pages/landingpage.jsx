import MainLayout from "../layouts/MainLayout";
import Aro from "../assets/Aro.png";
import bmw from "../assets/BMW.svg.png";
import mazda from "../assets/Mazda_logo.png";
import c1 from "../assets/coches/coche.png";
import c2 from "../assets/coches/coche2.png";
import c3 from "../assets/coches/coche3.png";
import "./landingpage.css";

function landingpage() {
  return (
    <div className="landing">
      <MainLayout>
        <div className="container col-xxl-12 px-4 py-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "80vh" }}>

          <div style={{ color: "white" }}>
            <h1 className="display-5 fw-bold lh-1 mb-3 text-center" >Bienvenid@ a Aro Automocion</h1>
            <p className="text-center">¡Descubre las mejores ofertas en coches!</p>

          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button type="button" id="btn-1" className="btn btn-primary btn-lg px-4 me-md-2">Iniciar sesión</button>
            <button type="button" id="btn-2" className="btn btn-outline-secondary btn-lg px-4">Más información</button>
          </div>


        </div>
        <div id="landingPage">


          <div className="row flex justify-content-md-center" style={{ maxHeight: "100vh", marginBottom: "100px" }}>
            <div className="row flex g-5 py-5 rounded  justify-content-around align-items-center" style={{ maxWidth: "100vw", color: "white" }}>
              <div style={{ maxWidth: "40vw" }} >
                <h1 className="display-5 fw-bold lh-1 mb-3">SOBRE NOSOTROS</h1>
                <p className="lead">   Aro Automoción es una red internacional de concesionarios dedicada a
                  ofrecer soluciones integrales de movilidad con los más altos estándares de calidad, confianza
                  y servicio. Con presencia en varios países, nuestra empresa se ha consolidado como un referente
                  en el sector automotriz gracias a un modelo de atención centrado en las personas
                  y a una amplia gama de vehículos que se adapta a las necesidades de cada cliente.</p>
              </div>



            </div>

          </div>



          <div className="contacto" >
            <h1>OFERTAS</h1>
            <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center" style={{ minHeight: "50vh" }}>

         
                <div className="card shadow p-3 mb-5 rounded cartasOfertas" style={{ width: "30rem", height: "20rem" }}>
                  <div className="card-body">
                    <img src={c1} style={{ width: "100%", height: "70%" }} className="rounded" />
                    <h5 className="card-title">TITULO</h5>
                    <p className="card-text">Parrafo prueba</p>

                  </div>

                </div>

                
                  <div className="card shadow p-3 mb-5 rounded cartasOfertas" style={{ width: "30rem", height: "20rem" }}>
                    <div className="card-body">
                      <img src={c1} style={{ width: "100%", height: "70%" }} className="rounded" />
                      <h5 className="card-title">TITULO</h5>
                      <p className="card-text">Parrafo prueba</p>

                    </div>

                  </div>

                  
                    <div className="card shadow p-3 mb-5 rounded cartasOfertas" style={{ width: "30rem", height: "20rem" }}>
                      <div className="card-body">
                        <img src={c1} style={{ width: "100%", height: "70%" }} className="rounded" />
                        <h5 className="card-title">TITULO</h5>
                        <p className="card-text">Parrafo prueba</p>

                      </div>

                    </div>
                  </div>
                

                </div>
              </div>
            </MainLayout>
          </div>
          );
}

          export default landingpage;