import { useContext } from 'react'
import '../assets/style/spinnerPie.css'
import { TimerContext } from '../context/TimerContext'

const TimmerComponent = () => {
    const {time} = useContext(TimerContext)


    return(
        <>
            { time > 0 && (
                <div className='clocks'>
                    <div className="chart"></div>
                    <p className="textTimer">{time}s</p>
                </div>
            )}
        </>
    )
}

export default TimmerComponent