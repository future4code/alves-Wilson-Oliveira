import axios from "axios"
import { useEffect, useState } from "react"
import { BaseURl } from "../components/Constantes/BaseURL"


export const UseMostraFeed = () => {
    const [data, setData] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState("")

    useEffect(() => {
        axios
            .get(`${BaseURl}/posts`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                },
                params: {
                    page: 1,
                    size: 10
                },
            })
            .then((resp) => {
                setLoading(false)
                setData(resp.data)
            })
            .catch((err) => {
                setLoading(false)
                setErro(err)
            })
    }, [])
    return [data, loading, erro]
}