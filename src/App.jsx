import data from "./assets/data.json";
import UserPanel from "./components/UserPanel";
import Card from "./components/Card";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.container}>
      <UserPanel />
      {data.map((field) => {
        return (
          <Card title={field.title} key={field.title} data={field.timeframes} />
        );
      })}
    </div>
  );
}

export default App;
