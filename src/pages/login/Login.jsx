import React, { useContext } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { AuthContex } from "../../contex/authContext";
const Login = () => {
  const { login } = useContext(AuthContex);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nobis
            dicta ad beatae atque mollitia, ea quisquam ipsum accusantium
            nostrum.
          </p>
          <span>Dont hava an account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username" value={""} />
            <input type="passsword" placeholder="password" value={""} />

            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
