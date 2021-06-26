import React, { useState, useEffect, useCallback } from "react";

const Test = () => {
  const [state, setstate] = useState(0);
  const [userId, setUserId] = useState(0);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearchUser = () => {
    const userInfo = users.filter((value) => {
      return value.id === userId;
    });
    console.log(userId);
    // console.log(userInfo);
    setUser(userInfo);
    // console.log(user);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setUserId(parseInt(value));
  };

  return (
    <>
      <h2>UseEffect</h2>
      <p>Introduce a number from 1 to 10:</p>
      <input type="number" onChange={handleOnChange} />
      <input type="button" value="Search user" onClick={handleSearchUser} />
      <h3>Usuario:</h3>
      {user.length !== 0 ? (
        user.map((data) => (
          <div key={data.id}>
            <h3>
              {" "}
              id: {data.id} name: {data.name} username: {data.username}
            </h3>
            <p> Email: {data.email}</p>
          </div>
        ))
      ) : (
        <> </>
      )}
    </>
  );
};

export default Test;
