import { Link } from "react-router-dom";
import AboutImg from "../../assets/imgs/about.webp";
import MrBeast from "../../assets/mrBeast.png";
import Button from "../../components/button/button.component";

import "./about.styles.scss";

const About = () => {
  return (
    <div className="about-route-container route-container">
      <div className="about-header-img">
        <img src={AboutImg} alt="About header" width="100px" height="100px" />
      </div>
      <div className="about-description">
        <h2>WHO WE ARE</h2>
        <br />
        <p>
          In June 2017, when Jimmy Donaldson (AKA MrBeast) received his first
          YouTube sponsorship deal of $10,000, he wondered, “how can I transform
          this money into something good?” Not wanting to keep the money for
          himself, Jimmy agreed to the sponsorship deal with one condition: he
          was able to give away all of the money. The sponsor agreed.
          <br />
          <br />
          Jimmy stayed true to his word and gave away the full $10,000, but he
          quickly realized that handing someone an envelope of cash was not
          enough. This first giveaway ignited a flame within Jimmy, and every
          charitable act fueled his desire to help those in need.
          <br />
          <br />
          Over the next few months, MrBeast started giving money to Uber
          drivers, to pizza delivery drivers, and Twitch streamers. Jimmy
          enjoyed the genuine reactions from his recipients, and he quickly
          realized how lives were being changed. It became Jimmy’s mission
          through video integration to help as many people as possible overcome
          barriers.
          <br />
          <br />
          And with a goal of making the world a better place, the idea for Beast
          Prizes was born.
          <br />
          <br />
          As a 501(c)3 organization, Beast Prizes exists to leverage the power
          of social media platforms and raise funds to give away. Beast Prizes
          will provide life-changing grants, assistance, and both monetary and
          non-monetary gifts to individuals and families. With your support,
          Beast Prizes will change the world.
        </p>
      </div>
      <div className="link-container">
        <Link to="/buy-ticket">
          <Button>JOIN US</Button>
        </Link>
      </div>
      <div className="about-header-img">
        <img src={MrBeast} alt="About header" width="100px" height="100px" />
      </div>
    </div>
  );
};

export default About;
