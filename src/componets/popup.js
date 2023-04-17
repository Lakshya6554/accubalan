import { Link } from "react-router-dom";
import "./popup.css";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          type="button"
          class="btn-close close-btn"
          aria-label="Close"
          onClick={() => props.setTrigger(false)}
        ></button>
        <p>
          Welcome to <strong>AccuBalance</strong>
        </p>
        <div className="A">
          <Link to="/login">
            <button className="login-signup-btn">Login</button>
          </Link>
        </div>
        <div className="A">
          <Link to="/signup">
            <button className="login-signup-btn">Signup</button>
          </Link>
        </div>
        <strong>
          <p>{props.name ? `Welcome - ${props.name}` : "Login please!!"}</p>
        </strong>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
