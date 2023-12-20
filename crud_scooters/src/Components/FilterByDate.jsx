import { useContext } from "react";
import { ScootersContext } from "./ScootersContext";
export default function FilterByDate() {
  const { handleFilterDate, handleFilterDateReset } =
    useContext(ScootersContext);
  return (
    <div className="filterDate">
      <label htmlFor="filterDate">Filter by Date</label>
      <input
        type="date"
        id="filterDate"
        onChange={(e) => handleFilterDate(e)}
      ></input>
      <button type="checkbox" id="all" onClick={handleFilterDateReset}>
        Reset Date
      </button>
    </div>
  );
}
