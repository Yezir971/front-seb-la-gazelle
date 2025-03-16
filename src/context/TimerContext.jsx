import { createContext } from "react"
import { useEffect, useState } from "react"
import { t } from "i18next";

export const TimerContext = createContext()

const TimerContextProvider = (props) => {

    let [time, setTime] = useState(60)
    let [messageTimer, setMessageTimer] = useState("")
    useEffect( () => {
        let cleanUp = setTimeout(() => {
            setTime(time-1)
        }, 1000);
        if(time<=0){
            setTime(0)
            setMessageTimer(t('finDujeu'))
            return
        }
        return () => {
            clearInterval(cleanUp)
        }
    }, [time])

    return(
        <TimerContext.Provider value={{ time,setTime,messageTimer,setMessageTimer }}>
            {props.children}
        </TimerContext.Provider>
    )
}

export default TimerContextProvider