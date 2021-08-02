import React, {useState} from 'react'


export default function CodeSplitExam() {
    const [state, setstate] = useState(0)
    import("./File").then(res => {
        const sum=res.add(16, 26);
        setstate(sum);
      });
    return (
        <div>
            <h1>Value : {state}</h1>
        </div>
    )
}
