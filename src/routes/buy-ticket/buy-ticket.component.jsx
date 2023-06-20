import PaymentForm from "../../components/payment-form/payment-form.component";
import "./buy-ticket.styles.scss";

const BuyTicket = () => {
  return (
    <div className="buy-ticket-route-container route-container">
      <div className="header-img-container">
        <div className="bg-img"></div>
        <div className="content-container">
          <h1>
            Join Us To Win A <br /> <span>$1,000,000!</span>
          </h1>
          <p>First Time for a world wide!</p>
          <p>It's so simple, Buy ticket and your are already a competitor</p>
        </div>
      </div>
      <div className="description">
        <h2>You Are All Winners!</h2>
        <p>
          When you join you get the chance to win the big prize $1,000,000
          <br />
          <br />
          Other competitors will get the chance to win other prizes like $1000
          or $10,000 amonge other amazing prizes!
          <br />
          <br />
        </p>
        <p>Buy a ticket and join us now!</p>
      </div>
      <div className="buy-ticket-form">
        <h3>By a ticket and we will email you with your prize</h3>
        <PaymentForm />
      </div>
    </div>
  );
};

export default BuyTicket;
