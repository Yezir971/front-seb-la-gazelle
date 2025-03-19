import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const token = Cookies.get('token');
    const [score, setScore] = useState(null);

    const login = async (token) => {
        setIsLoading(true);
        if (!token) return;
        try{
          
            const response = await fetch('https://orange-wolf-959534.hostingersite.com/api/user', {
                method: 'GET',
                headers:{
                    "Authorization": `Bearer ${token}`,
                    "Content-Type":"application/json",
                },
            });
            const data = await response.json();
            if(data){
                setUser(data);
            }
            setIsLoading(false);
        }catch(e){
            console.log(e);
            setIsLoading(false);
        }
    }
    
    useEffect(() => {
        login(token);
    },[])
    
    return (
        <AuthContext.Provider value={{ isLoading ,user}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;