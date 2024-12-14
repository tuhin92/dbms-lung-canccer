import { useEffect, useState } from "react";
import "../../style.css"; 
import M_data from "./M_data";

const Malignant = () => {
  const [mdata, setmData] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to toggle between show all or show 12
  const itemsToShow = showAll ? mdata.length : 12; // Show all or 12 items based on state

  useEffect(() => {
    fetch("/malignant.json")
      .then((res) => res.json())
      .then((data) => setmData(data));
  }, []);

  const handleToggle = () => {
    setShowAll(!showAll); // Toggle showAll state
  };

  return (
    <div>
      <div className="grid-container">
        {mdata.slice(0, itemsToShow).map((mdt) => (
          <M_data key={mdt.id} data={mdt} />
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

export default Malignant;
