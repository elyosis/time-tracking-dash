import IMAGES from "../images/Images";
import classes from "./UserPanel.module.css";

function UserPanel(props) {
  const { onTimeframeSwitch, timeframes, currentTimeframe } = props;

  function buttonHandler(value) {
    onTimeframeSwitch(value);
  }

  return (
    <div className={classes["user-panel"]}>
      {/* User info */}
      <div className={classes["user-info"]}>
        <img
          src={IMAGES.user}
          alt="User icon"
          className={classes["user-icon"]}
        />
        <div className={classes["user-text"]}>
          <p>Report for</p>
          <p>Jeremy Robson</p>
        </div>
      </div>

      {/* Panel controls */}
      <div className={classes["panel-controls"]}>
        {timeframes.map((timeframe, index) => {
          return (
            <button
              key={index}
              className={
                timeframe === currentTimeframe ? classes.active : undefined
              }
              onClick={() => buttonHandler(timeframe)}
            >
              {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default UserPanel;
