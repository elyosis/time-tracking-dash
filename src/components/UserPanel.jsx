import IMAGES from "../images/Images";
import classes from "./UserPanel.module.css";

function UserPanel() {
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
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
    </div>
  );
}

export default UserPanel;
