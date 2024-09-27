import React,{useState,useMemo} from 'react';
function Usememo(){
    const [count,setCount]=useState(0);
    const [inputValue,setInputValue]=useState('');
    //mempoize the calculation
    const expensiveCalculation=useMemo(()=>{
        console.log('Calculating...');
        let total=0;
        for(let i=0;i<1000000000;i++){
            total+=1;
        }
       return total+count; 
    },[count]);
    return(
        <div>
            <h1>useMemo Example</h1>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment Count</button>
            <p>Expensive Calculation Result:{expensiveCalculation}</p>
            <input type='text'value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            placeholder='Type something...'/>
        </div>
    );
}
export default Usememo;