import { useContext, useEffect, useRef } from 'react'
import { TimerContext } from '../context/TimerContext'
import styled from 'styled-components'

const TimerWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TimmerComponent = () => {
  const { time, duration } = useContext(TimerContext) // `duration` = durée totale en secondes
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const percentage = ((duration - time) / duration) * 100
      chartRef.current.style.setProperty('--percentage', `${percentage}%`)
    }
  }, [time, duration])

  return (
    <TimerWrapper>
      <div ref={chartRef} className="chart"></div>
      <p className="textTimer">{time}s</p>
    </TimerWrapper>
  )
}

export default TimmerComponent
