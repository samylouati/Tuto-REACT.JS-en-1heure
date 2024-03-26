//Composants Tweet
import { Tweet } from "./Tweet";
import { useState } from "react";

const DEFAULT_TWEET = [
  {
    id: 0,
    name:"Samy",
    content:"Je vais bien!",
    like: 100,
  },
  {
    id: 1,
    name:"Emilie",
    content:"Cool",
    like: 80,
  },
  {
    id: 2,
    name:"Aurelien",
    content:"Super!",
    like: 90,
  },
  {
    id: 3,
    name:"Anaelle",
    content:"Fun!",
    like: 85,
  },
]

function App() {
  let [tweets, setTweets] = useState(DEFAULT_TWEET);

  const tweetList = tweets.map((tweet) => {
    return (
      <Tweet 
        key={tweet.id}
        name={tweet.name}
        content={tweet.content}
        like={tweet.like} 
      />
    );
  });

  return (
  <div className="tests">
    <p>{username}</p>
    <button className="myBtn" onClick={addLetter}>Ajouter une lettre</button>
    <div className="tweet_container">
      {t}
    </div>
    
  </div>
  );
}

export default App;