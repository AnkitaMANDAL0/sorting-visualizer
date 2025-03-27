import React from "react";
import SortingVisualizer from "./components/SortingVisualizer";
import "./Style.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <SortingVisualizer />
    </div>
  );
};

export default App;
