import { useEffect, useState } from "react"

export default function QuestionTimer({onTimeOut, timeout, mode}) {
    const [timeRemaining, setTimeRemaining] = useState(timeout);

    useEffect(() => {
        console.log('iniciado');

        const timer = setTimeout(onTimeOut, timeout)
    
        return () => {
            clearTimeout(timer);
        }
    }, [onTimeOut, timeout]) 

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 100)
        }, 100)

        return () => {
            clearInterval(interval)
        }
    }, [])





    return <progress value={timeRemaining} max={timeout} className={mode}/>
}