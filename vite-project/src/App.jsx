//les composants

//Composants Tweet
import { Tweet } from "./Tweet";

//un hook 
import { useState } from "react";


function App() {
  let [tweets, setTweets] = useState();

  let [username, setUsername] = useState("Samy");

  const addLetter = () => {
    username += "a";
    console.log(username);
  };

  return (
  <div>
    <p>{username}</p>
    <button onClick={addLetter}>Ajouter une lettre</button>
    <div className="tweet_container">
      <Tweet name="Samy" content="Je vais bien!" like={100}/>
      <Tweet name="Emilie" content="Cool!"like={20}/>
      <Tweet name="Aurélien" content="Super!"like={50}/>
      <Tweet name="Anaelle" content="Fun"like={30}/>
    </div>
    
  </div>
  );
}

export default App;