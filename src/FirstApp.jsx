/*const FirstApp = ({ value }) => {
    const handleAdd = () => {
        console.log('calling handleAdd')
    }

    return (
        <>
            <h1> Counter </h1>
            <span> { value }</span>
            <button onClick={ () => handleAdd() }>+1</button>
        </>
    )
}
export default FirstApp;
*/

import { useState } from "react";

/*
const FirstApp = ({value})=>{ //Estoy enviando el componente
    const fn = () => { value ++; //++ es para ir incrementando el valor
    console.log( value)}
    return (
        <>
        <button onClick ={()=>fn()}>b1</button>
        <span> { value } </span>
        </>
        
    )
}
export default FirstApp;
*/
const FirstApp = ({value})=>{ //Estoy enviando el componente
   const [a,setA] = useState( value);
   const fn=()=> { setA ( a+1 )
    console.log(a)} //++ es para ir incrementando el valor
    
    return (
        <>
        <button onClick ={()=>fn()}>b1</button>
        <span> { a } </span>
        </>
        
    )
}
export default FirstApp;