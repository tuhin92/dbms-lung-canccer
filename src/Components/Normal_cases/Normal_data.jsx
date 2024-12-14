import { useEffect, useState } from "react";
import "../../style.css";
import N_data from "./N_data";

const Normal_data = () => {
  const [ndata, setnData] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to toggle between show all or show 12
  const itemsToShow = showAll ? ndata.length : 12; // Show all or 12 items based on state

  useEffect(() => {
    fetch("/normal.json")
      .then((res) => res.json())
      .then((data) => setnData(data));
  }, []);

  const handleToggle = () => {
    setShowAll(!showAll); // Toggle showAll state
  };

  return (
    <div>
      <div className="grid-container">
        {ndata.slice(0, itemsToShow).map((ndt) => (
          <N_data key={ndt.id} data={ndt} />
        ))}
      </div>
      <div>
        <button onClick={handleToggle} className="btn btn-primary toggle-button">
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default Normal_data;
