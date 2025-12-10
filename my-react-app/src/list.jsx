import PropTypes from "prop-types";

function List( props ) {

  const category = props.category
  const itemList = props.items

  const listItem = itemList.map(item => 
        <li key={item.id}>{item.name} : {item.calories}</li>
      )

  return (
    <>
    <h3>{category}</h3>
    <ol>{listItem}</ol>
    </>
    
  );
}

// PropTypes validation
List.propTypes = {
  itemList: PropTypes.arrayOf(
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
