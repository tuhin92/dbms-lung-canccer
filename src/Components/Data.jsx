const Data = ({ data }) => {
  const { id, url } = data; // Extract data from the prop
  return (
    <div className="card">
      <figure>
        <img
          src={url} // Use the URL from the JSON data
          alt={`Image for id: ${id}`}
        />
      </figure>
    </div>
  );
};

export default Data;
