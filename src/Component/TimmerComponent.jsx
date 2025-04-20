import { useContext } from 'react'
// import '../assets/style/spinnerPie.css'
import { TimerContext } from '../context/TimerContext'
import styled from 'styled-components'

const Timer = styled.div`
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`
const TimmerComponent = () => {
    const {time, messageTimer} = useContext(TimerContext)


    return(
        <Timer>
            <div className="chart"></div>
            <p className="textTimer">{time}s</p>
        </Timer>
    )
}

export default TimmerComponent