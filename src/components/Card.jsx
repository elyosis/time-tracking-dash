import IMAGES from "../images/Images";
import classes from "./Card.module.css";

function Card(props) {
  const { title, data, timeframe } = props;
  const classFormattedTitle = title.toLowerCase().replace(" ", "-");
  const srcFormattedTitle = title.toLowerCase().replace(/\s/g, "");

  return (
    <div className={classes["card-grid"]}>
      {/* Top card */}
      <div
        className={`${classes["card-top"]} ${
          classes[`card-${classFormattedTitle}`]
        }`}
      >
        <img src={IMAGES[srcFormattedTitle]} alt="" />
      </div>
      {/* Bottom card */}
      <div className={classes["card-bottom"]}>
        {/* Name/menu*/}
        <div className={classes["card-menu"]}>
          <p>{title}</p>
          <div className={classes["menu-icon"]}>
            <img src={IMAGES.ellipsis} alt="" />
          </div>
        </div>

        {/* Time display */}
        <div className={classes["card-info"]}>
          {/* Current hours */}
          <p>{data[timeframe].current}hrs</p>
          {/* Past hours */}
          <p>Last Week - {data[timeframe].previous}hrs</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
