export function Tweet({name, content, like}) {
    console.log(name, content, like)

    const onLike = () => {
        console.log('LIKE', name);
    };

// //Test pour les likes 
//   let [like, setLike] = useState(like)

//   const addLike = () => {
//     like += [+1];
//     console.log(like)
//   }

    return (
        <div className="tweet">
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={() => onLike()}>{like} <i class="fa-solid fa-heart"></i></button>
        </div>
    );
}

