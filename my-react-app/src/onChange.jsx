import { useState } from "react";

function onChange() {

  // 1️⃣ Text Input
  const [name, setName] = useState("");

  // 2️⃣ Number Input
  const [age, setAge] = useState("");

  // 3️⃣ Password Input
  const [password, setPassword] = useState("");

  // 4️⃣ Textarea
  const [message, setMessage] = useState("");

  // 5️⃣ Checkbox
  const [isStudent, setIsStudent] = useState(false);

  // 6️⃣ Radio Buttons
  const [gender, setGender] = useState("");

  // 7️⃣ Select Dropdown
  const [city, setCity] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>onChange Event Handler Examples</h2>

      {/* Text Input */}
      <label>Name:</label><br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>

      <hr />

      {/* Number Input */}
      <label>Age:</label><br />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>Age: {age}</p>

      <hr />

      {/* Password Input */}
      <label>Password:</label><br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>Password: {password}</p>

      <hr />

      {/* Textarea */}
      <label>Message:</label><br />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>Message: {message}</p>

      <hr />

      {/* Checkbox */}
      <label>
        <input
          type="checkbox"
          checked={isStudent}
          onChange={(e) => setIsStudent(e.target.checked)}
        />
        Are you a student?
      </label>
      <p>Student: {isStudent ? "Yes" : "No"}</p>

      <hr />

      {/* Radio Buttons */}
      <label>Gender:</label><br />
      <input
        type="radio"
        value="Male"
        checked={gender === "Male"}
        onChange={(e) => setGender(e.target.value)}
      /> Male

      <input
        type="radio"
        value="Female"
        checked={gender === "Female"}
        onChange={(e) => setGender(e.target.value)}
      /> Female

      <p>Gender: {gender}</p>

      <hr />

      {/* Select Dropdown */}
      <label>City:</label><br />
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="">Select City</option>
        <option value="Srinagar">Srinagar</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      <p>City: {city}</p>
    </div>
  );
}

export default onChange;
