import { useContext } from 'react'
import '../assets/style/spinnerPie.css'
import { TimerContext } from '../context/TimerContext'
import styled from 'styled-components'

const Timer = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const TimmerComponent = () => {
    const {time, messageTimer} = useContext(TimerContext)


    return(
        <Timer>
            <div className="chart"></div>
            <p className="textTimer">{time}s</p>
            {/* <p className="textEndTimer">{messageTimer}</p> */}
        </Timer>
    )
}

export default TimmerComponent