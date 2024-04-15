import { useState } from 'react'

import './App.css'

function App() {


  return (
    <>
      <div>
        <h1>Higher order components</h1>
        <Counter></Counter>
        <HigherWorkingRed cmp={Counter}></HigherWorkingRed>
        <HigherWorkingGreen cmp={Counter}></HigherWorkingGreen>
        <HigherWorkingRed cmp={Counter}></HigherWorkingRed>

      </div>
    </>
  )
}

function HigherWorkingRed(props){
  return <div style={{backgroundColor:'red', width:100}}>
   <h1><props.cmp></props.cmp></h1>
  </div>
}

function HigherWorkingGreen(props){
  return <div style={{backgroundColor:'green', width:100}}>
   <h1><props.cmp></props.cmp></h1>
  </div>
}

function Counter(){

  const [count , setCounter]=useState(0);
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCounter(count+1)}}>Click</button>
    </div>
    
  )
}

export default App
