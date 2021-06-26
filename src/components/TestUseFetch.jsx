import React, {useEffect} from "react";
import useFetch from "../hooks/useFetch";

const TestUseFetch = () => {
  const { response } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {}
  );

  useEffect(() => {
   setTimeout(() => {
       console.log(response)
   }, [])  
  })

  if (response == null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h1>Users:</h1>
      {response.map((value) => (
        <div key={value.id}>
            <h3>ID: {value.id} --- Name: {value.name}</h3>
            <p>Email: {value.email}</p>
        </div>
      ))}
    </div>
  );
};

export default TestUseFetch;
