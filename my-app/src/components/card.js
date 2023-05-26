// create a function that will display news article on page
// create an async function that imports api
// import the api using url/api key 
// fetch the data from API
// look at the different titles that need to be displayed put them in tags
// display one article in one card
//create a button on the page that will show the next card with new information about a new article
// create a search button that can search for articles based on combination of key words. 


import { useState, useEffect} from "react";

function DisplayNewsArticle () {

    const [article, setArticle] = useState({});
    
    useEffect(() => {
      async function fetchArticle() {
        const response = await fetch("https://gnews.io/api/v4/{endpoint}?apikey=API_KEY", {
          headers: { accept: "application/json" },
        });
        const data = await response.json();
        console.log(data);
        setArticle(data);
      }
      fetchArticle();
    }, []);



/* {
  "totalArticles": 54904,
  "articles": [
    {
      "title": "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
      "description": "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
      "content": "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
      "url": "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
      "image": "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
      "publishedAt": "2022-09-28T08:14:24Z",
      "source": {
        "name": "PhoneArena",
        "url": "https://www.phonearena.com"
      }
    }
  ]
}
*/
  return  (
    <div className="article-viewer">
      <h1> {article.title} </h1>
      <img
        src=""
        alt=""
      />
      <p></p>
    </div>
  );

  }
  export default DisplayNewsArticle