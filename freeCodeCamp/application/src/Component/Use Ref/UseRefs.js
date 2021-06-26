import React, {useRef} from 'react';

function UseRefs() {
 const inputRef = useRef(null);
 const onButtonClick = () => {
    inputRef.current.focus();
    inputRef.current.style.color="red";
    inputRef.current.value=1000;
    
 };
 return (
   <>
     <input ref={inputRef} type="text" />
     <button onClick={onButtonClick}>Focus the input</button>
   </>
 );
}
export default UseRefs;