import { useState } from "react"

const useFetch = (url, method) => {
<<<<<<< HEAD
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
=======
    const [data, setData] = useState({})
    const [isLoading, setIsLoadin] = useState(true)
    const [error, setError] = useState(false)
    const [dataError, setDataError] = useState()
    
    const send = async (body) => {
        try {
            setIsLoadin(true)
>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457
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
<<<<<<< HEAD

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
=======
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
>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457
