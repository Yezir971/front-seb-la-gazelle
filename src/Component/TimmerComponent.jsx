import { useContext, useEffect, useState } from 'react'
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
const Chart = styled.div`
  width: 87px;
  height: 87px;
  border-radius: 50%;
  background: radial-gradient(circle, #6D67C9 50%, transparent 50%);
  transition: background 0.6s linear;
`;
const TextTimer = styled.div`
  font-weight: 600;
  font-size: xx-large;
  text-align: center;
  transition: color 0.3s linear;
`;
const TimmerComponent = () => {
    const {time, messageTimer} = useContext(TimerContext)
    const [backgroundImage, setBackgroundImage] = useState('');
    const [textColor, setTextColor] = useState('#6D67C9');

    useEffect(() => {
        if ( time > 60) return;
    
        const percent = ((60 - time) / 60) * 100;
    
        // Définir la couleur en fonction du pourcentage
        let color = '#6D67C9'; // violet
        if (percent > 50 && percent <= 90) color = '#EB9710'; // orange
        if (percent > 90) color = '#DB2222'; // rouge
    
        const gradient = `conic-gradient(rgba(255, 255, 255, 0) ${percent}%, ${color} 0%)`;
    
        setBackgroundImage(gradient);
        setTextColor(color);
    }, [time]);

    return(
        <Timer>
            <Chart style={{ backgroundImage }}></Chart>
            <TextTimer style={{ color: textColor }}>{time}s</TextTimer>
        </Timer>
    )
}

export default TimmerComponent