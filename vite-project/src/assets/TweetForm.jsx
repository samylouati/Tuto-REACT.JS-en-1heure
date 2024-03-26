export function TweetForm({onSubmit}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
    
        const name = event.target.name.value;
        const content = event.target.content.value;
    
        const newTweet = {
          name,
          content,
          like: 0,
        };
    
        onSubmit(newTweet);
    
      };
    return (
        <form onSubmit={handleSubmit}className="tweet_form">
        <h4>Nouveau Tweet</h4>
        <input placeholder="name" type="text" name="name" id="" />
        <input placeholder="content" type="content" name="content"/>
        <input className="submit" type="submit" />
      </form>
    );
}