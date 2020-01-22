
import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage";
import dummyData from "./dummy-data.js";


const App = () => {

  const [data] = useState(dummyData)
  console.log('Apps', data);


  return (
    <div className="App">
      <SearchBar/>
      <PostsPage data={data}/> 
      {/* Add components here  and pass props where appropriate */}
    </div>
  );
};

export default App;
