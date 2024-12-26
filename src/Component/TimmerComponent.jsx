import { useContext } from 'react'
import '../assets/style/spinnerPie.css'
import { TimerContext } from '../context/TimerContext'

const TimmerComponent = () => {
    const {time, messageTimer} = useContext(TimerContext)


    return(
        <>
            <div className="chart"></div>
            <p className="textTimer">{time}s</p>
            {/* <p className="textEndTimer">{messageTimer}</p> */}
        </>
    )
}

export default TimmerComponent