import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const TestUseFetch = () => {
  const { response, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (error !== null) {
    return <p>Ups... Error!</p>
  }

  if (isLoading || response == null) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <h1>Users:</h1>
      {response.map((value) => (
        <div key={value.id}>
          <h3>
            ID: {value.id} --- Name: {value.name}
          </h3>
          <p>Email: {value.email}</p>
        </div>
      ))}
    </>
  );
};

export default TestUseFetch;
