import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';


let friends=[{Name:'Etu',Address:'Dhaka'},
  {Name:'Shikha', Address:'Gazipur'},
  {Name:'Mahbub', Address:'Jamalpur'},
  {Name:'Shrabontee', Address:'Jamalpur'}
  ]
function App(){
  return (
    <div className="App" >
      <Counter></Counter>
      {friends.map(friend=><Friend friend = {friend}></Friend>)}
      </div>
  );

}
function Counter(){
  const[count,setCount]=useState(0);
  // const handleiIncrease = ()=> {
  //   const newCount =count+1;
  //   setCount(newCount);
  // }
  return(
  <div>
    <h2>Count :{count}</h2>
    <button style={{padding:'10px 20px', color:'white',backgroundColor:'green',border:'0px',borderRadius:'10px',margin:'10px'}} onClick={()=>setCount(count+1)}>Increase</button>
    <button style={{padding:'10px 20px', color:'white',backgroundColor:'red',border:'0px',borderRadius:'10px'}} onClick={()=>{
    if(count>0){
      setCount(count-1)
    }
    }}>Decrease</button>
    
    </div>
  )
}

function Friend(props){
  const personStyle={
    float:'left',
    width:'30%',
    padding:'10px',
    backgroundColor:'lightgray',
    height:'200px',
    margin:'10px'
  }
  const {Name,Address}=props.friend;
  return(
    <div style={personStyle}>
      <h2>{Name}</h2>
      <h4>{Address}</h4>
    </div>
  )
}
export default App;
