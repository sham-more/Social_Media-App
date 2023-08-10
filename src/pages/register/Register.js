import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social World</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nobis
            dicta ad beatae atque mollitia, ea quisquam ipsum accusantium
            nostrum.
          </p>
          <span>Already hava an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="passsword" placeholder="Password" />

            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
