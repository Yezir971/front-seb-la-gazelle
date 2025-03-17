import { useState } from "react"

const useFetch = (url, method) => {
    // const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [dataError, setDataError] = useState()

    
    const send = async (body) => {
        // Réinitialisation des états avant chaque requête
        setIsLoading(true);
        setError(false);
        setDataError(null);
        // data : représente les data recu de l'api donné erreurs 
        // loading : représente le chargement de l'api 
        // error : représente le boolean des erreurs liée au serveur de l'api. (si true c'est a cause d'une erreur 500)
        // dataError : est le descriptif des errurs en cas d'erreur 500
        try {
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

            const datas = {"data" : dataApi}
            setIsLoading(false);

            return datas
            

            
        } catch (errors) {
            // setData(error)

            console.log('erreur api')
            // on a détecter une errur on la set grace a notre setteur 
            // setError(true)
            // // on save l'erreur dans dataError 
            // setDataError(errors) 
            const data = {"data":errors} 
            setIsLoading(false);

            
            return data

            
        } 

    }    
    return{ send,isLoading, error, dataError }
}


export default useFetch
