import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  console.log(blogData);
  return (
    <div className="App">
      <Header blog={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts}/> 
      
    </div>
  );
}

export default App;
