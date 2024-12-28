import { useEffect, useState } from "react"
import Album from "./Album"
import './album.css'


export default function Albums(){
    const [albums, setAlbums] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data=> setAlbums(data))
    },[])

    return(
        <div className="album">
            <h3>Albums: {albums.length}</h3>
            {
                albums.map(album => <Album albums={album}></Album>)
            }
        </div>
    )
}