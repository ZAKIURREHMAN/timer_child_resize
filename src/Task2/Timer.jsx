import React, { useEffect, useRef, useState } from 'react'


function Timer() {
    const [timer,settimer] = useState(0)
    const TimeRef = useRef()
    useEffect(()=>{
        TimeRef.current = setInterval(() => {
            settimer((pre)=>pre+1)
        },1000);
        return ()=>{
            clearInterval(TimeRef.current)
        }
    },[])
  return (
    <div>  {timer} </div>
  )
}
export default Timer