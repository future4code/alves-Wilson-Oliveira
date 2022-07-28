import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (url) =>{
    const [data, setData]= useState(undefined)
    const [loading,setLoading]=useState(false)
    const [erro,setErro]=useState("")
    useEffect(()=>{
        setLoading(true)
        axios.get(url)
        .then((resp)=>{
            setLoading(false)
            setData(resp.data)
        })
        .catch((err)=>{
            setLoading(false)
            setErro(err)
        })
    },[url])
    return [data,loading,erro]
}