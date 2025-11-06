import React, {useState, useEffect} from "react";
import { useApi } from "../../hooks/AuthContext";


export function Home () {
    const [movies, setMovies] = useState([""]);
    
    const api = useApi();

}