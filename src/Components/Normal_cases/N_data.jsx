const N_data = ({ data }) => {
    const { id, url } = data;
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

export default N_data;
