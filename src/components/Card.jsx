import IMAGES from "../images/Images";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.card}>
      {/* Info div */}
      <div className={classes["card-content"]}>
        {/* Name/menu*/}
        <div className={classes["card-menu"]}>
          <p>{props.title}</p>
          <div className={classes["menu-icon"]}>
            <img src={IMAGES.ellipsis} alt="" />
          </div>
        </div>

        {/* Time display */}
        <div className={classes["card-info"]}>
          {/* Current hours */}
          <p>{props.data.weekly.current}hrs</p>
          {/* Past hours */}
          <p>Last Week - {props.data.weekly.previous}hrs</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
