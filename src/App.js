import React from "react";
import "./App.css";

function App() {
  const APP_ID = `2b747fc4`;
  const APP_KEY = `d4e5d53d398f73289e4ed5fca4d38690	`;
  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <h1>Recipes</h1>
    </div>
  );
}

export default App;
