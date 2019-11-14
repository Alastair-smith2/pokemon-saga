import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../ducks/user";

const Login: React.FC = (): JSX.Element => {
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="login-container">
      <h1>Login</h1>
      <h2>Username</h2>
      <input value={username} onChange={e => updateUsername(e.target.value)} />
      <h2>Password</h2>
      <input value={password} onChange={e => updatePassword(e.target.value)} />
      <button onClick={() => dispatch(fetchUser(username))}>Login</button>
    </div>
  );
};

export default Login;
