// import React,{useState,useEffect} from "react";
import React, {useState} from "react";


// const countries = [
//     "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
//     "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
//     "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
//     "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the",
//     "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor",
//     "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
//     "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
//     "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
//     "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
//     "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
//     "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
//     "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
//     "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
//     "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru",
//     "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
//     "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
//     "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden",
//     "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
//     "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
//     "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
// ]// import DisplayDetails from './displayMovieData';
// import MoviesList from './moviesList';
// import AddTodo from './AddTodo.js';
// import TaskList from './TaskList.js';

// Ques1. 
// export default function App()
// {
//   const [count,setCount] = useState(0);
//   function handleClick(){
//     setCount(count+1);
//   }
//   return(
//     <button onClick={handleClick}>
//      you pressed me {count} times!
//     </button>
//   );
// }

// Ques2. 
// export default function App()
// {
//   const [text,setText] = useState("hello");
//   function handleChange(e)
//   {
//     setText(e.target.value);
//   }
//   return(
//     <div>
//       <input value={text} onChange={handleChange}/>
//       <p>you have typed {text}</p>
//       <button onClick={()=>setText("hello")}>Reset</button>
//     </div>
//   );
// }

// Ques3. 
// export default function App(){
//   const [liked,setLiked] = useState(true);
//   function handleChecked(e){
//     setLiked(e.target.checked);
//   }
//   return(
    
//    <div>
//      <label><input type="checkbox" checked={liked} onChange={handleChecked}/>
//       I liked this</label>
//       <p>you {liked ?'liked this':'dont like this' }</p>
//    </div>
//   );
// }

// Ques4. 
// export default function App()
// {
//   const [name,setName] = useState('Taylor');
//   const [age,setAge] = useState(42);

//   return(
//     <div>
//       <input value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
//       <button onClick={()=>setAge(age+1)}>Increament Age</button>
//       <p>Hello, {name}. You are {age}</p>
//     </div>
//   );
// }

// Examples of objects and arrays in state
// QUES1. 
// export default function App()
// {
//   // const [fname,setFname] = useState('Abhi');
//   // const [lname,setLname] = useState('xyz');
//   // const [email,setEmail] = useState('Abhixyz@sculputre.com');

//   const [user,userUpdate] = useState({fname:'Abhi',
//                                       lname:'xyz',email:'Abhixyz@sculputre.com'});

//   return(
//     <div>
//       <label>First name: <input value={user.fname} onChange={(e)=>{userUpdate({...user,fname:e.target.value})}}/></label><br/><br/>

//       <label>Last name: <input value={user.lname} onChange={(e)=>{userUpdate({...user,lname:e.target.value})}}/></label><br/><br/>

//       <label>Email: <input value={user.email} onChange={(e)=>{userUpdate({...user,email:e.target.value})}}/></label>

//       <p>{user.fname}{' '}{user.lname}{' '}<br/>{'('}{user.email}{')'}</p>
//     </div>
//   );
// }

// QUES2. 
// export default function App()
// {
//   const [person, setPerson] = useState({name:'Niki de Saint Phalle', artwork:{ title: 'Blue Nana',city:'Hamburg',image: 'https://i.imgur.com/Sd1AgUOm.jpg'}});

//    function handleNameChange(e)
//    {
//      setPerson({...person, name:e.target.value});
//    }
//    function handleTitleChange(e)
//    {
//      setPerson({...person, artwork: {...person.artwork, title:e.target.value} });
//    }
//    function handleCityChange(e)
//    {
//      setPerson({...person, artwork :{...person.artwork, city:e.target.value} });
//    }
//    function handleImageChange(e)
//    {
//      setPerson({...person, artwork :{...person.artwork, image:e.target.value} });
//    }

  
//   return(
//     <div>
//         <label>Name:
//         <input
//           value={person.name}
//           onChange={handleNameChange}
//         />
//       </label>
//       <label>
//         Title:
//         <input
//           value={person.artwork.title}
//           onChange={handleTitleChange}
//         />
//       </label>
//       <label>
//         City:
//         <input
//           value={person.artwork.city}
//           onChange={handleCityChange}
//         />
//       </label>
//       <label>
//         Image:
//         <input
//           value={person.artwork.image}
//           onChange={handleImageChange}
//         />
//       </label>
//       <p>{person.artwork.title}{' by '}{person.name} {' located in '+person.artwork.city}</p>
//       <p>{person.artwork.image}</p>

//     </div>
//   );
// }

// QUes3.
// function initialTodos()
// {
//   const initaialTodos = [];
//   for(let i=0;i<10;i++)
//     {
//       initaialTodos.push({id:i+1, text:'item'+(i+1)});
//     }
//     return initaialTodos;
// }

// export default function App()
// {
//   const [todos,setTodos] = useState(initialTodos);
//   const [text,setText] = useState('');

//   return(
//     <div>

//       <input placeholder = 'add item' value={text} onChange={(e)=>setText(e.target.value)}/>
//       <button onClick={()=>{setText('');setTodos([...todos,{id:todos.length, text:text}])}}>Add</button>
//       <ul>
//         {
//           todos.map(item=>(<li key={item.id}>{item.text}</li>))
//         }
//       </ul>
//     </div>
//   );

// }

// QUes3(2)


//   const initialTodos = [{ id: 0, text: 'Buy milk', done: true },
//                          { id: 1, text: 'Eat tacos', done: false },
//                          { id: 2, text: 'Brew tea', done: false },
//                         ];
 
// let nextId=3;


// export default function App()
// {
//   const [todos,setTodos] = useState(initialTodos);
//   const [text,setText] = useState('');

//   function handleAddTodo()
//   {
//     setTodos([...todos,{id:nextId++,text:text,done:false}])
//   }

//   return(
//     <div>

//       <input placeholder = 'add item' value={text} onChange={(e)=>setText(e.target.value)}/>
//       <button onClick={()=>{setText('');handleAddTodo()}}>Add</button>
//       <ul>
//         {
//           todos.map(item=>(<li key={item.id}>{item.text}</li>))
//         }
//       </ul>
//     </div>
//   );

// }

// export default function App()
// {
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   return(
//     <div>
//        {/* Display Movies Names */}
//        <MoviesList setSelectedMovie={setSelectedMovie}/>
       
//        {/* Display Movie Details */}
//        <DisplayDetails selectedMovie={selectedMovie}/>
//     </div>
//   );
// }

// export default function App()
// { 
//   const [search,setSearch] = useState("");
//   const [filteredCountry,setFilteredCountry] = useState(countries);

//   useEffect(()=>{implementFilteration()},[search])

//   function implementFilteration()
//   {
//     setFilteredCountry(countries.filter(country=>country.toLowerCase().includes(search.toLowerCase().trim()) == true));
//   }

//     return(
//     <div>
//       <form>
//         <input type="text" placeholder="search country" value={search} onChange={(e)=>setSearch(e.target.value)}/>

//       </form>
//      {
//        filteredCountry.map((item)=><p>{item}</p>)
//      }
     
//     </div>
//   );
// }


// import '../styles/App.css';

const arr =["Siblings","Friends","Love","Affection","Marriage","Enemy"];
const App = () => {
   
const [fname,setFname] = useState("");
const [lname,setLname] = useState("");
const [relationship,setRelationship] = useState("");
const [flag,setFlag] = useState(true);

function calculateRealtionship(e)
{
  e.preventDefault();

      let str1 = fname;
      let str2 = lname;
  
   for(let char of str1)
    {
      if(char.includes(str2))
        {
          str1=str1.replace(char,"");
          str2=str2.replace(char,"");
        }
    }
    if((str1.length)>0 && str2.length>0)
      {
        setRelationship(arr[((str1+str2).length)%6]);
        setFlag(true);
      }
    else
    setFlag(false);
      
}

function resetAll()
{
  // console.log("fname",fname,lname);
  setFname("");
  setLname("");
  setRelationship(" ");
}
        return(
            <div id="main">
              <form>
                <input type ="text" data-testid="input1" placeholder="Enter first name" value={fname} name="name1" onChange={(e)=>setFname(e.target.value)}/>

                <input type ="text" data-testid="input2" placeholder="Enter second name" value={lname} name="name2" onChange={(e)=>setLname(e.target.value)}/>

                <button data-testid="calculate_relationship" type="Submit" onClick={calculateRealtionship}>Calculate Relationship Future</button>
                <button data-testid="clear" type="reset" onClick={resetAll}>Clear</button>
              </form>

              { flag ? <h3 data-testid="answer">{relationship}</h3> : <h3 data-testid="answer">Please Enter valid input</h3>}
              
            </div>
        )
    }


export default App;


