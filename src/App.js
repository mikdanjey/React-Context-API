import React from "react";
import { useAuthContext } from "./useAuthContext";

function App() {
  const { user } = useAuthContext();
  return <div className="App">User: {user}</div>;
}

export default App;
