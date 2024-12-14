import React, { useEffect, useState } from "react";
import Data from "./Data";
import '../style.css';

const Begining_data = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to toggle between show all or show 12
  const itemsToShow = showAll ? data.length : 12; // Show all or 12 items based on state

  useEffect(() => {
    fetch("/begining_case.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleToggle = () => {
    setShowAll(!showAll); // Toggle showAll state
  };

  return (
    <div>
      <div className="grid-container">
        {data.slice(0, itemsToShow).map((dt) => (
          <Data key={dt.id} data={dt} />
        ))}
      </div>
      <div >
        <button onClick={handleToggle} className="btn btn-primary toggle-button">
        {showAll ? "Show Less" : "Show All"}
      </button>
      </div>
    </div>
  );
};

export default Begining_data;
