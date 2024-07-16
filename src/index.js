import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App /> 
);




// import React, {useState} from "react";
// import '../styles/App.css';

// const arr =["Siblings","Friends","Love","Affection","Marriage","Enemy"];

// const App = ()=> {
   
// const [fname,setFname] = useState("");
// const [lname,setLname] = useState("");
// // const [relationship,setRelationship] = useState("");

// function calculateRealtionship(e)
// {
//   e.preventDefault();
//   console.log(fname,lname)
// }
//         return(
//             <div id="main">
//               <form>
//                 <input type ="text" data-testid="input1" placeholder="Enter first name" value={fname} name="name1" onChange={()=>setFname(e.target.value)}/>
//                 <input type ="text" data-testid="input2" placeholder="Enter second name" value={lname} name="name2" onChange={()=>setLname(e.target.value)}/>
//                 <button data-testid="calculate_relationship" type="Submit" onSubmit={calculateRealtionship}>Calculate Relationship Future</button>
//                 <button data-testid="clear" type="reset" onClick={resetAll}>Clear</button>
//               </form>
//             </div>
//         )
//     }


// export default App;


