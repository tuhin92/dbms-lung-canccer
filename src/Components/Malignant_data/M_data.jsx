const M_data = ({ data }) => {
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

export default M_data;
