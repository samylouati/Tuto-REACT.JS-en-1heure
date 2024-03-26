export function Tweet({id, name, content, like, onDelete, onLike}) {

    return (
        <div className="tweet">
            <button onClick={() => onDelete(id)} className="delete"><i class="fa-solid fa-xmark"></i></button>
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={() => onLike(id)}>{like} <i class="fa-solid fa-heart"></i></button>
        </div>
    );
}

