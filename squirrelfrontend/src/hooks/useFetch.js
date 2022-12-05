import { useState, useEffect } from "react";
import axios from "axios"


export default function useFetch(url){
    const [data,setData] = useState(0)

    useEffect(()=> {
        axios.get(url)
        .then(res => setData(res.data.data))
        .catch(err => console.log(err))
    },[])

    return data
}