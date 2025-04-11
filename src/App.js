import './App.css';
// import { useState,useEffect } from 'react';
import { useReducer } from 'react';
const [firstcity,second]=["Tokyo","bengalure","bend"]
console.log(firstcity);
console.log(second);
function App({library}) {
  const [checked, setChecked] = useReducer(checked=>!checked,false);
  // const [emotion,setEmotion]=useState("Happy");
  // const [secondary, setSecondary]= useState("tired");

  // useEffect(()=> {
  //   console.log(`it's ${emotion} right now `)
  // },[emotion]);

  // useEffect(()=> {console.log(`it's  ${secondary} around here`)
  // },[secondary]);

  return (
    <div className="App">
           {/* <h1>Current emotion is {emotion}</h1>
    <button onClick={() => setEmotion("sad") } >
      sad
      </button>
      <button onClick={() => setEmotion("excited") } >
      excited 
      </button>
      <h2>Current secondary emotion is {secondary}. </h2>
      <button onClick={()=> setSecondary("Grateful")}>Grateful</button>  */}
      <input type="checkbox" value={checked} onChange={setChecked}/>
      <label>{checked ? "checked" : "not checked"}</label>
    </div>

  
  );
}

export default App;
