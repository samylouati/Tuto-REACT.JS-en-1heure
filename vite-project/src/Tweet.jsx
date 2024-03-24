export function Tweet({name, content, like}) {
    console.log(name, content, like)

    const onLike = () => {
        console.log('LIKE', name);
    };

    return (
        <div className="tweet">
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={() => onLike()}>{like} <i class="fa-solid fa-heart"></i></button>
        </div>
    );
}

