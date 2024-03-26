//Composants Tweet
import { Tweet } from "./Tweet";
import { useState } from "react";
import { TweetForm } from "./assets/TweetForm";
import { TweetList } from "./assets/TweetList";

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
];

const useTweets = () => {
  const [tweets, setTweets] = useState(DEFAULT_TWEET);

  const addTweet = (tweet) => {

    setTweets((curr) => { 

      const newTweet = {
        id: curr[curr.length - 1]?.id +1 ?? 0,
        name: tweet.name,
        content: tweet.content,
        like: 0,
      };

      return[...tweets, newTweet];
    });    
  };

  const onDelete = (tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
  };

  const onLike = (tweetId) => {
    setTweets((curr) => {
      const copyTweet = [...curr];

      const likedTweet = copyTweet.find((tweet) => tweet.id === tweetId);
      likedTweet.like += 1;

      return copyTweet;
    });
  };

  return { onLike, onDelete, addTweet, tweets}

}



function App() {
 const { onLike, onDelete, addTweet, tweets} = useTweets();

  return (
    <div className="tests">
     
      <TweetForm onSubmit={addTweet} />
      <TweetList tweets={tweets} onDelete={onDelete} onLike={onLike}/>

    </div>
  );
}

export default App;