import { useState, useEffect } from "react";
import axios from "axios"

//custom hook that takes in a url and gets data. able to be used accross the app
export default function useAxios(url){
    const [data,setData] = useState(0)

    useEffect(()=> {
        axios.get(url)
        .then(res => setData(res.data.data))
        .catch(err => console.log(err))
    },[])

    return data
}