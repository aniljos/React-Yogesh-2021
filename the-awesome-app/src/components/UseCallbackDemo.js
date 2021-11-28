import React, { useState, useCallback, useRef, useImperativeHandle } from 'react';

// React.memo ==> 16.3, the component updates only if the props or state changes
const Simple = React.memo(React.forwardRef((props, ref) => {
    console.log("executing simple..");

    useImperativeHandle(ref, () => {
        //return an object
        return {
            message: "This is the simple component",
            foo
        }
    });

    function foo(){
        alert("in simple foo");
    }
    function bar(){
        alert("in simple bar");
    }
    return (
        <div>
            <h4>Simple</h4>
            <p>Value: {props.value}</p>
            <button onClick={() => props.onUpdate(props.value + 2)}>Update</button>
        </div>
    );
}));
const UseCallbackDemo = () => {

    
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const num  = useRef(0);
    const simpleRef = useRef(null);

    const updateCount = useCallback((ctr) => {
        setCount(ctr);
        num.current++;
    }, [count]);

    function displayRef(){
        console.log("simpleRef", simpleRef.current);
        simpleRef.current.foo();
    }
    return (
        <div>
            <h3>UseCallback Demo</h3>

            <div>
                <p>Num: {num.current}</p>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            <div>
                <input placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                Name: {name}
            </div>
            <div>
                <Simple ref={simpleRef} value={count} onUpdate={updateCount}/>
            </div>
            <div>
                <button onClick={displayRef}>Display Simple Ref</button>
            </div>
        </div>
    )
}
export default UseCallbackDemo;