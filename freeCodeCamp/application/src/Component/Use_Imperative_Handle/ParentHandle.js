import React, {useRef, useDebugValue} from 'react'
import ChildHandle from './ChildHandle';

export default function ParentHandle() {
    const ref=useRef();
    useDebugValue("Cool that")
    return (
        <div>
            <ChildHandle ref={ref}/>
            <button onClick={()=>ref.current.increase()}>বাড়াও </button>
            <button onClick={()=>ref.current.message()}>Chesk Alert Message </button>
        </div>
    )
}
