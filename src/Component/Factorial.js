import React,{useState,useMemo} from 'react';
function Factorial(){
    const [count,setCount]=useState(0);
    const [inputValue,setInputValue]=useState('');
    //mempoize the calculation
        
      const factorial=(n)=>{
        if(n===0||n===1)return 1;
        let result=1;
        for(let i=2;i<=n;i++){
            result*=i;
        }
        return result;
        };
        const expensiveCalculation=useMemo(()=>{
            console.log('Calculating factorial...');
            return factorial(count);
            
        },[count]);
      
    return(
        <div>
            <h1>useMemo- Factorial</h1>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <p>Factorial{count}-{expensiveCalculation}</p>
            {/* <input type='text'value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            placeholder='Type something...'/> */}
        </div>
    );
}
export default Factorial;