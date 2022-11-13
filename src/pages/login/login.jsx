import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const { loading, err, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

 
  return (
    <div className="login">
      <div className="lContainer">
        <input
          placeholder="username or email"
          type="text"
          id="username"
          className="lInput"
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          id="password"
          className="lInput"
          onChange={handleChange}
        />
        <button  onClick={handleLogin} className="lButton">
          Login
        </button>
        {err && <span>{err.message}</span>}
      </div>
    </div>
  );
};

export default Login;
