import logo from './logo.svg';
import './App.css';
import {useState} from "react";
const userName = ["aiman", "sadik", "minhaz", "tamim"]

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  )
}

function Counter() {
  const [number, setNumber] = useState(0)
  
  const addNumber = ()=> setNumber (number + 1)

  const minusNumber = ()=> setNumber (number - 1)

  return (
    <div>
      <h2> Number: {number}</h2>
    <button onClick={addNumber}>Add Number</button>
    <button onClick={minusNumber}>Minus Number</button>
    </div>
  )
}


 function BoxCard(props) {
  console.log(props)
 return (
   <div className="card-design">
       <h1>{props.name}</h1>
       <h3>Age: {props.age}</h3>
      <h5>Gender: {props.gender}</h5>
      <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Porro, alias.</p>
    </div>
   )
 }

export default App;
