import React, {useLayoutEffect} from 'react'

export default function UseLayoutEffect() {
    useLayoutEffect(()=>{
        console.log("Use Layout Effect")
    })
    //as like as useEffect
    // runs after the construction of DOM tree and before Component Render
    return (
        <div>
            
        </div>
    )
}
