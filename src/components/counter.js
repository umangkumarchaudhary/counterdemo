import React , {useState}from "react"
import './counter.cssgi'

export default function Counter(){
    const [count, setCount] = useState(0)
    function increment(){
        setCount ((prevState) => prevState +1)
    }
    function decrement(){
        if(count > 0){
        setCount ((prevCount) => prevCount -1)
        } 
    }
    return (
        <div>
         <header className="App-header">
           <h1> counter app using useState </h1>
             <p className="para"> count is :<b> {count}</b></p>
             <p className="error">Error</p>
                <div>
                      
                      <button className="btn" onClick={decrement}> decrement </button>
                      <button className="btn" onClick={increment}> increment </button>
                </div>
          </header>
        </div>

    )
}