import React, { useEffect, useLayoutEffect, useState } from 'react'

const AppUseLayoutEffect = () => {
    const [text,setText] = useState("Hello");
    useLayoutEffect(()=>{
            setText('Bye')
    },[])
    
  return (
    <div>
        <h1>{text}</h1>
    </div>
  )
}

export default AppUseLayoutEffect