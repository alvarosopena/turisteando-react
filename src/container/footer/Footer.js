
import LATAM from '../../assets/images/LATAM.png';
import HOSTEL from '../../assets/images/Hostel.png';
import ASSIST from '../../assets/images/Assist.png';
import './App.css';

function Footer (){
  

return (
    
    <section className="partners" > 
      <div className="partners">
        <h1 className="main-title" >Trabajan con nosotros:</h1>

      <div className="container2">
          <h3 className="title">LATAM</h3>
            <div className="content">
              <a href="https://www.latam.com/es_ar/" target="_blank">
                <div className="content-overlay"></div>
                <img className="content-image" src={LATAM} />
                   <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">LATAM</h3>
                    <p className="content-text"></p>
                  </div>
              </a>
          </div>
      </div>

      <div className="container2">
          <h3 className="title">HOSTELWORLD</h3>
            <div className="content">
            <a href="https://www.hostelworld.com/" target="_blank">
                <div className="content-overlay"></div>
                <img className="content-image" src={HOSTEL} />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">HOSTELWORLD</h3>
                    <p className="content-text">Meet the world</p>
                    </div>
                    </a>
            </div>
        </div>

        <div className="container2">
          <h3 className="title">Assist Card</h3>
            <div className="content">
            <a href="https://www.assistcard.com/ar" target="_blank">
                <div className="content-overlay"></div>
                  <img className="content-image" src={ASSIST} />
                  <div className="content-details fadeIn-bottom"> 
                    <h3 className="content-title">Assist Card</h3>
                    <p className="content-text">El mejor seguro para tu viaje</p>
                 
                    </div>
                    </a>
            </div>
        </div>
        </div> 
    </section>
)
}

export default Footer;