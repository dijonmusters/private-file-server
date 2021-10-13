import { useState } from "react";
import supabase from "../utils/supabase";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    // login with supabase
    e.preventDefault();
    await supabase.auth.signIn({
      email,
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        className="ml-2 border-b"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </form>
  );
};

export default Login;
