import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../login/login.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [reg, setReg] = useState(false);
  const [error, setError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/auth/register", {
        email,
        password,
        username,
      })
      .then((result) => {
        setReg(true);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
        return setError(err);
      });
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          placeholder="username or email"
          type="text"
          id="username"
          className="lInput"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="email"
          type="email"
          id="email"
          className="lInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          id="password"
          className="lInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister} className="lButton">
          Register
        </button>
      </div>

      {reg && <span> successfully registered</span>}
      {error && <span style={{ color: "red" }}> registraion failed</span>}
    </div>
  );
};

export default Register;
