import React from "react";
import useFetch from "../hooks/useFetch";
import NotFound from "./NotFound";

const Posts = () => {
  const { response, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (error !== null) {
    <NotFound />;
  }

  if (isLoading || response === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>Posts:</h2>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 ">
        {response.map((post) => (
          <div key={post.id} className="col">
            <div
              className="card mx-auto border-dark mb-3 h-100"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">Header</div>
              <div className="card-body text-dark">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
