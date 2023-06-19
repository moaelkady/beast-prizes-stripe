import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";
import BoxData from "../../components/box-data/box-data.component";
import OfficeImg from "../../assets/imgs/office.webp";
import SubscripeForm from "../../components/subscripe-form/subscripe-form.component";
import { INTRO_BOX_DATA } from "../../data/data";
import "./home.styles.scss";

const Home = () => {
  alert(
    "Please notice this is just a project, Don't try to buy anything with your actual data"
  );
  return (
    <div className="home-route-container route-container">
      <div className="header-container">
        <div className="bg-img"></div>
        <div className="header-content">
          <h1>TOGETHER WE CAN.</h1>
          <p>Giving back through life-changing experiences.</p>
          <Link to="/buy-ticket">
            <Button>Join Us</Button>
          </Link>
        </div>
      </div>
      <div className="intro-container">
        {INTRO_BOX_DATA.map((itemData) => (
          <BoxData key={itemData.id} itemData={itemData} />
        ))}
      </div>
      <div className="tickets-prices-section">
        <div className="img-container">
          <img src={OfficeImg} alt="buy-ticket" width="100px" height="100px" />
        </div>
        <div className="description-container">
          <h3>JOIN US NOW</h3>
          <span>$1, $5, $10, $15, $20</span>
          <p>
            Your support and contributions will enable us to meet our goals and
            improve conditions. Your generous donation will give you a chance.
          </p>
        </div>
      </div>
      <div className="past-winners">
        <h3>#Past Winners</h3>
        <div className="imgs-container">
          <div className="row">
            <div className="img-item-container">
              <img
                src={OfficeImg}
                alt="past-winner"
                width="100px"
                height="100px"
              />
            </div>
            <div className="img-item-container">
              <img
                src={OfficeImg}
                alt="past-winner"
                width="100px"
                height="100px"
              />
            </div>
            <div className="img-item-container">
              <img
                src={OfficeImg}
                alt="past-winner"
                width="100px"
                height="100px"
              />
            </div>
          </div>
          <div className="row">
            <div className="img-item-container">
              <img
                src={OfficeImg}
                alt="past-winner"
                width="100px"
                height="100px"
              />
            </div>
            <div className="img-item-container">
              <img
                src={OfficeImg}
                alt="past-winner"
                width="100px"
                height="100px"
              />
            </div>
            <div className="img-item-container">
              <img
                src={OfficeImg}
                alt="past-winner"
                width="100px"
                height="100px"
              />
            </div>
          </div>
          <div className="row">
            <div className="img-item-container">
              <img
                src={OfficeImg}
                alt="past-winner"
                width="100px"
                height="100px"
              />
            </div>
            <div className="img-item-container">
              <img
                src={OfficeImg}
                alt="past-winner"
                width="100px"
                height="100px"
              />
            </div>
            <div className="img-item-container">
              <img
                src={OfficeImg}
                alt="past-winner"
                width="100px"
                height="100px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="subscripe-section">
        <SubscripeForm />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
