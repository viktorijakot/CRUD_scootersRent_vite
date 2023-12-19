import "./App.scss";
import { ScootersProvider } from "./Components/ScootersContext";
import Create from "./Components/Create";
import ScootersList from "./Components/ScootersList";
import Edit from "./Components/Edit";
import { useContext } from "react";
import { ScootersContext } from "./Components/ScootersContext";

function App() {
  // const { edit } = useContext(ScootersContext);
  return (
    <ScootersProvider>
      {/* {scootersList && <Edit />} */}
      {/* <Edit /> */}
      <div className="container">
        <Create />
        <ScootersList />
      </div>
    </ScootersProvider>
  );
}

export default App;
