import React,{useState, forwardRef, useImperativeHandle} from 'react'

const ChildHandle=forwardRef((props,ref)=> {
    const [state, setstate] = useState(0);
    function increase(){
        setstate(state+1);
    }

    useImperativeHandle(ref,() => ({
            increase,
            message:()=>{alert(state)}
        } 
    ))


    return (
        <div>
            <h1>Count : {state}</h1>
            <button onClick={increase}>Increase</button>
        </div>
    )
})
export default ChildHandle;