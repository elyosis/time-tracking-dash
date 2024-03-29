import data from "./assets/data.json";
import UserPanel from "./components/UserPanel";
import Card from "./components/Card";
import classes from "./App.module.css";
import { useState } from "react";

function App() {
  const [timeframe, setTimeframe] = useState("weekly");
  const timeframes = Object.keys(data[0].timeframes);

  function changeTimeframe(newTimeframe) {
    setTimeframe(newTimeframe);
  }

  return (
    <div className={classes.container}>
      <UserPanel
        onTimeframeSwitch={changeTimeframe}
        timeframes={timeframes}
        currentTimeframe={timeframe}
      />
      {data.map((field) => {
        return (
          <Card
            title={field.title}
            key={field.title}
            data={field.timeframes}
            timeframe={timeframe}
          />
        );
      })}
    </div>
  );
}

export default App;
