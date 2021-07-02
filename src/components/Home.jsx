import React from "react";
import NotFound from "../components/NotFound";
import useFetch from "../hooks/useFetch";
const Home = () => {
  const { response, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (error !== null) {
    return <NotFound />;
  }

  if (isLoading || response == null) {
    return <div className="">Loading...</div>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {response.map((user) => (
          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Home;
