import { Fragment, useState } from "react";

import { writeDataToDocs } from "../../utils/firebase.utils";

import Button from "../button/button.component";
import "./subscripe-form.styles.scss";

const SubscripeForm = () => {
  const [subscriped, setSubscriped] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailObj = {
      userEmail: email,
    };
    const collectionName = "subscribers";

    await writeDataToDocs(emailObj, collectionName);

    setEmail("");
    setSubscriped(true);
  };
  return (
    <div className="subscripe-form-container">
      {subscriped ? (
        <div className="success-msg">
          <p>Subscriped Successfully</p>
        </div>
      ) : (
        <Fragment>
          <h3>STAY IN TOUCH</h3>
          <p>
            Sign up to hear from us about more challenges, prizes, and events.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="btn-container">
              <Button type="submit">SIGN UP</Button>
            </div>
          </form>
        </Fragment>
      )}
    </div>
  );
};
export default SubscripeForm;
