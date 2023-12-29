import IMAGES from "../images/Images";
import classes from "./UserPanel.module.css";

function UserPanel(props) {

  function buttonHandler(value) {
    props.onTimeframeSwitch(value);
  }

  return (
    <div className={classes["user-panel"]}>
      {/* User info */}
      <div className={classes["user-info"]}>
        <img src={IMAGES.user} alt="User icon" className={classes["user-icon"]} />
        <div>
          <p>Report for</p>
          <span>Jeremy Robson</span>
        </div>
      </div>

      {/* Panel controls */}
      <div className={classes["panel-controls"]}>
        <button onClick={() => {buttonHandler("daily")}}>Daily</button>
        <button onClick={() => {buttonHandler("weekly")}}>Weekly</button>
        <button onClick={() => {buttonHandler("monthly")}}>Monthly</button>
      </div>
    </div>
  );
}

export default UserPanel;
