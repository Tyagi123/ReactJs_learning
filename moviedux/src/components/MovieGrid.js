import React, {useState, useEffect} from "react";
import '../styles.css';




export default function MovieGrid(){

const [movies, setMovies] = useState([])


useEffect(()=> {
  const m = ["a", "b", "c"]
    setMovies(m)
 
}, [])

    return(
        <div>
{movies.length}

        </div>
    );
}