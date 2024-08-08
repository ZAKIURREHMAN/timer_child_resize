import React, { useEffect, useRef, useState } from 'react'
function Timer() {
    const [timer,setTimer] = useState(0)
    const timeRef = useRef()
    useEffect(()=>{
        timeRef.current = setInterval(() => {
          setTimer((pre)=>pre+1);
          
        },1000);
        return ()=>{
            clearInterval(timeRef.current)
        }
    },[])
  return (
    <div>  {timer} </div>
  )
}
export default Timer