import React, { useEffect, useLayoutEffect, useState } from 'react'
function Task3() {
    const [windowwidth,setwindowwidth] = useState(window.innerWidth)
    useEffect(()=>{
        let useWindowResize  = ()=>{
            setwindowwidth(window.innerWidth)
        }
        window.addEventListener('resize', useWindowResize);
    },[])
    useEffect(()=>{
        let navbar = document.getElementsByClassName('navbar')[0]
          navbar.style.height = '100vh'
        if(windowwidth<500){
            navbar.style.backgroundColor = 'red'
            console.log("UseEffect")
        }
        else if(windowwidth<700){
            navbar.style.backgroundColor = 'pink'
        }
        else if(windowwidth<900){
            navbar.style.backgroundColor = 'green'
        }
        else{
            navbar.style.backgroundColor = 'blue' 
        }
    },[windowwidth])
    useLayoutEffect(()=>{
        let navbar = document.getElementsByClassName('navbar')[0]
        if(windowwidth<500){
            navbar.style.backgroundColor = 'red'
            console.log("UseLay OUt...")
        }
        else if(windowwidth<700){
            navbar.style.backgroundColor = 'pink'
        }
        else if(windowwidth<900){
            navbar.style.backgroundColor = 'green'
        }
        else{
            navbar.style.backgroundColor = 'blue' 
        }
    },[windowwidth])
  return (
    <div>
        <div className="navbar">
            {windowwidth}
        </div>
    </div>
  )
}
export default Task3