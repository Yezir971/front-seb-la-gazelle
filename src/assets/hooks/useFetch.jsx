import { useState } from "react"

const useFetch = (url, method) => {
    const [data, setData] = useState({})
    const [isLoading, setIsLoadin] = useState(true)
    const [error, setError] = useState(false)
    const [dataError, setDataError] = useState()
    
    const send = async (body) => {
        try {
            setIsLoadin(true)
            // response de notre requete fetch 
            const response = await fetch(url, {
                method: method,
                // credentials: 'include', 
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(body)
            })
            const dataApi = await response.json()
            // on save les data de notre response 
            setData(dataApi)
        } catch (error) {
            // on a détecter une errur on la set grace a notre setteur 
            setError(true)
            // on save l'erreur dans dataError 
            setDataError(error) 
        } 
        // async function fetchData(){
        // }
        // useEffect(() => {
        //     // si il n'y a pas d'url alors on return rien
        //     if(!url){
        //         return
        //     }
        //     // on dit que les informations commencent le chargent avec le setteur setLoading car il y a une url :) 
        //     setIsLoadin(true)
        //     // création d'un hooks personnaliser fetchData, cela va nous permettre de factoriser notre code
        //     fetchData()
        // // on met à jour notre composant a chaque fois que notre url, notre méthode et notre body changent en même temps, en gors a chaque fois que l'on fait une requête.
        // }, [url])

    }    
    return{ send,isLoading, data, error, dataError }
}


export default useFetch