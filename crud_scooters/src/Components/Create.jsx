import { useContext } from "react";
import { ScootersContext } from "./ScootersContext";

export default function Create() {
  const { handleFormSubmit } = useContext(ScootersContext);
  return (
    <div className="create" onSubmit={(e) => handleFormSubmit(e)}>
      <form className="create__form" typeof="submit">
        <label>Last Use Time</label>
        <input
          type="date"
          min={new Date().toJSON().slice(0, 10)}
          name="date"
          placeholder="Last Use Time"
        />
        <label>Total Ride Kilometres</label>
        <input type="number" name="totalRideKilometres" />
        <button type="submit">Create a New Scooter</button>
      </form>
    </div>
  );
}
