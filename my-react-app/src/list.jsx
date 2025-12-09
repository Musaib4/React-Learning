import PropTypes from "prop-types";

function List({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.name} : {item.calories} : {item.category}</li>
      ))}
    </ul>
  );
}

// PropTypes validation
List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
      // you can include other props if you want:
      // category: PropTypes.string,
      // calories: PropTypes.number,
    })
  ).isRequired,
};


export default List;
