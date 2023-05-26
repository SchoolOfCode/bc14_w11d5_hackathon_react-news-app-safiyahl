//IMPORT react -- DONE
// create a function that will display news article on page -- ALMOST DONE
// create an async function that imports api  --DONE
// import the api using url/api key --DONE
// fetch the data from API --DONE
// look at the different titles that need to be displayed put them in tags --DONE
// display one article in one card
//create a button on the page that will show the next card with new information about a new article
// create a search button that can search for articles based on combination of key words.
import { useState, useEffect } from "react";
import "./App.css";
import DisplayNewsArticle from "./components/card";

function App() {
  const [text, setText] = useState("");
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function fetchArticle() {
      const response = await fetch(
        "https://gnews.io/api/v4/search?q=example&apikey=d3a7aaccbf4f3907ebb3b444278852da",
        {
          headers: { accept: "application/json" },
        }
      );
      const data = await response.json();
      console.log(data.articles);
      setArticle(data);
    }
    fetchArticle();
  }, []);

  return (
    <div className="article-viewer">
      {article.articles && article.articles.length > 0 ? (
        article.articles.map((article) => {
          console.log(article);
          return <p key={article.title}> {article.title} </p>;
          {
            /* <h1>{articleItem.title}</h1>
            <h3>{articleItem.description}</h3>
            <img src={articleItem.image} alt="" />
            <p>{articleItem.content}</p>
            <p>{articleItem.publishedAt}</p> */
          }
        })
      ) : (
        <p>nothing to display</p>
      )}
    </div>
  );
}
export default App;
