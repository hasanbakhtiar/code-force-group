import React, { useState } from 'react'

const GenCompo = (OriginalCompo) => {

    const HOC = (props) => {
        const [count,setCount] = useState(0);
        return <OriginalCompo {...props} count={count} incCount={()=>(setCount((count)=>count+1))} />
    }
    return HOC;

}

export default GenCompo