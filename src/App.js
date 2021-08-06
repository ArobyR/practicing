import React, { useState } from "react";
// import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "./contexts/UserContext";
import AppRouter from "./routes/AppRouter";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
