import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5550/api/user/login`, {
        email: email,
        password: password,
      });
      console.log("Login API response:", res.data); 
      if (res.status === 200) {
        const { username, token } = res.data.data;
        console.log("Token received on login:", token);
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        navigate(`/${username}/product-list`);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log("Error", error);
      alert("Login failed");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (token && username) {
      navigate(`/${username}/product-list`);
    }
  }, [navigate]);

  return (
    <div className="signupPage">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" className="button" value="Login" />
      </form>
      <p>
        Don't have an Account{" "}
        <span>
          <Link style={{ color: "red", fontWeight: "900" }} to={"/"}>
            SignUp
          </Link>
        </span>{" "}
      </p>
    </div>
  );
}

export default Login;
