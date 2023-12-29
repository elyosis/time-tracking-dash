import classes from "./App.module.css";
import UserPanel from "./components/UserPanel";
import Card from "./components/Card";

function App() {
  return (
    <div className={classes.container}>
      <UserPanel />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
