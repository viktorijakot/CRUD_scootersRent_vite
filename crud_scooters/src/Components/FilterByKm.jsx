import { useContext } from "react";
import { ScootersContext } from "./ScootersContext";
export default function FilterByKm() {
  const { handleFilterKm } = useContext(ScootersContext);
  return (
    <div className="filterKm">
      <label htmlFor="filterKM">Filter by Km</label>
      <select id="filterKm" onChange={(e) => handleFilterKm(e)}>
        <option value={-1}>All</option>
        <option value={1}>0 KM</option>
        <option value={2}>0 to 50 KM</option>
        <option value={50}>50 to 100 KM</option>
        <option value={100}>100 and more KM</option>
      </select>
    </div>
  );
}
