import React from "react";
import AutoComplete from "./components/AutoComplete/AutoComplete";
import { fetchTodos } from "./utils/fetchTodos"; // Ensure fetchTodos is exported properly

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>AutoComplete Component</h1>
      <AutoComplete fetchData={fetchTodos} />
    </div>
  );
};

export default App;
