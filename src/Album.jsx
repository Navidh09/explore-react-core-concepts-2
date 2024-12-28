export default function Album({albums}){
    const {title, id} = albums;
    return(
        <div className="album">
            <h3>ID: {id} </h3>
            <p>Title: {title}</p>

        </div>
    )
}