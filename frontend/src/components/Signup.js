import React, { useContext } from "react";
import { toast } from "react-toastify";
import { client } from "../utils";
import { FormWrapper } from "./Login";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";

import logo from "../assets/logo.png";
const Signup = ({ login }) => {
  const { setUser } = useContext(UserContext);
  const email = useInput("");
  const fullName = useInput("");
  const userName = useInput("");
  const password = useInput("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.value || !password.value || !userName.value || !fullName.value) {
      return toast.error("Please fill in all the fields");
    }

    if (userName.value === "explore") {
      return toast.error(
        "The userName you entered is not acceptable, try again"
      );
    }

    const re = /^[a-z0-9]+$/i;
    if (re.exec(userName.value) === null) {
      return toast.error(
        "The userName you entered is not acceptable, try again"
      );
    }

    const body = {
      email: email.value,
      password: password.value,
      userName: userName.value,
      fullName: fullName.value,
    };

    try {
      const { token } = await client("/auth/signup", { body });
      localStorage.setItem("token", token);
    } catch (err) {
      return toast.error(err.message);
    }

    const user = await client("/auth/me");
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));

    fullName.setValue("");
    userName.setValue("");
    password.setValue("");
    email.setValue("");
  };

  return (
    <FormWrapper onSubmit={handleLogin}>
      <img src={logo} alt="logo" />

      <form>
        <input
          type="email"
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
        />
        <input
          type="text"
          placeholder="Full Name"
          value={fullName.value}
          onChange={fullName.onChange}
        />
        <input
          type="text"
          placeholder="userName"
          value={userName.value}
          onChange={userName.onChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password.value}
          onChange={password.onChange}
        />
        <input type="submit" value="Sign up" className="signup-btn" />
      </form>

      <div>
        <p>
          Already have an account? <span onClick={login}>Login</span>
        </p>
      </div>
    </FormWrapper>
  );
};

export default Signup;
