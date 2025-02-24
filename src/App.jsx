import React from "react";
import './App.css';
import Hoc_comp from './Components/hoc/hoc_comp';
import Index from './Components/hoc';
import Index2 from "./Components/hoc/index2";

const Updated = Hoc_comp({ WrappedComponent: Index });
const Updated1 = Hoc_comp({ WrappedComponent: Index2 });

function App() {
  return (
    <>
      <Updated />
      <Updated1 />
    </>
  );
}

export default App;
