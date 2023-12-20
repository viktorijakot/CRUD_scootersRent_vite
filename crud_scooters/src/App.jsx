import "./App.scss";
import { ScootersProvider } from "./Components/ScootersContext";
import Create from "./Components/Create";
import ScootersList from "./Components/ScootersList";
import Edit from "./Components/Edit";
import Statistics from "./Components/Statistics";
import FilterByKm from "./Components/FilterByKm";
import FilterByDate from "./Components/FilterByDate";

function App() {
  return (
    <ScootersProvider>
      <div className="container">
        <div className="box">
          <Create />
          <FilterByKm />
          <FilterByDate />
          <Statistics />
        </div>
        <ScootersList />
      </div>
    </ScootersProvider>
  );
}

export default App;
