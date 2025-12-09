import PropTypes from "prop-types";

// ✅ USE ES6 DEFAULT PARAMETERS FOR FUNCTIONAL COMPONENTS
export function Props({ name = "guest", age = 10, isStudent = true }) {
  return (
    <div className="student">
      {/* This is necessary because if a prop is not passed, it is undefined.
        The default parameters above handle that case.
        Also, if name is an empty string, it will print "Name: ". 
      */}
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "yes" : "no"}</p>
    </div>
  );
}



// Keep PropTypes for validation
Props.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};


// conditional rendering
export function UserGreeting(props){

    return(props.isLoggedIn ? <h2> Welcome {props.username}</h2>: <h2>please log in to continue</h2>);

}
UserGreeting.propTypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};