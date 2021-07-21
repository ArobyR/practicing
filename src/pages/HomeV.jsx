import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { userData } from "../helpers/userData";

const HomeV = () => {
  const { user, setUser } = useContext(UserContext);

  const handleData = () => {
    setUser(userData.data);
  };

  const handleLogout = () => {
      setUser(null)
  }

  return (
    <div className="container text-center mt-4">
      <p>Page HOME</p>
      {!user ? 
        <button type="button" className="btn btn-primary" onClick={handleData}>
          Login
        </button>
       : 
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      }
    </div>
  );
};

export default HomeV;
