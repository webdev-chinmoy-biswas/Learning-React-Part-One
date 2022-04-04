import logo from './logo.svg';
import './App.css';

const userName = ["aiman", "sadik", "minhaz", "tamim"]

function App() {
  return (
    <div className="App">
      {
        userName.map(name => <BoxCard name={name}></BoxCard>)
      }
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
