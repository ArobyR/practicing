import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const About = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="container text-center mt-4">
      <p>Page About</p>
      {!user ? (
        <h2>Plase login...</h2>
      ) : (
        <div>
          <h3>
            Name: {user.first_name} {user.last_name}
          </h3>
          <h3>Email: {user.email}</h3>
          <img src={user.avatar} alt={user.id} width="150" height="150" />
        </div>
      )}
    </div>
  );
};

export default About;
