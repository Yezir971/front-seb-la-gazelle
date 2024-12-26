import { useContext } from 'react'
import '../assets/style/spinnerPie.css'
import { TimerContext } from '../context/TimerContext'

const TimmerComponent = () => {
<<<<<<< HEAD
    const {time} = useContext(TimerContext)
=======
    const {time, messageTimer} = useContext(TimerContext)
>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457


    return(
        <>
<<<<<<< HEAD
            { time > 0 && (
                <div className='clocks'>
                    <div className="chart"></div>
                    <p className="textTimer">{time}s</p>
                </div>
            )}
=======
            <div className="chart"></div>
            <p className="textTimer">{time}s</p>
            <p className="textEndTimer">{messageTimer}</p>
>>>>>>> d3782d70f2776c96e94844069aa362dcbf558457
        </>
    )
}

export default TimmerComponent