import { useContext } from "react";
import { ScootersContext } from "./ScootersContext";
export default function Statistics() {
  const { scootersList, getAllKm } = useContext(ScootersContext);
  return (
    <div className="statistics">
      <h3>Statistics</h3>
      <p>
        Scooters quantity: <strong>{scootersList.length}</strong>
      </p>
      <p>
        Total number of kilometers driven:{" "}
        <strong>{getAllKm(scootersList)} </strong> KM
      </p>
    </div>
  );
}
