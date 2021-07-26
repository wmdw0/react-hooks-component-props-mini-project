import React from "react";
import Article from "./Article"

function ArticleList({ posts }) {
    var Articles;
    if (posts){
        Articles = posts.map((post) => {
            return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
          }
          )
    }
    // const Articles = articles.map((post) => {
    //     return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    //   }
    //   )
    return (
      <div id="articlelist">
        <main>
            {Articles}
        </main>
        
        
      </div>
    );
  }
  
  export default ArticleList;