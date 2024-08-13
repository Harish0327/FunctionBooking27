// import React from 'react'
// import { useState } from 'react'
// export default function App() {
//   const[use,setUse]=useState(0)
//  const change=()=>{
//   setUse(prev =>prev+1)
//  }
//   return (
// <>
// <h1>{use}</h1>
// <button onClick={change}>increment</button>
// </>



    
//   )
// }
// import { useState } from "react";

// export default function App() {
//   const[car,setCar]=useState({
//     brand:"Audi",
//     color:"black",
//     year:2024
//   })
//   const change=()=>{
//   setCar({
//     brand:"Swift",
//     color:"white",
//     year:2023
//   })
//   }

//   return (
//     <>
//     <h1>I have a {car.brand}</h1>
//     <h3>it is a {car.color} & {car.year} model</h3>
//     <button onClick={change}>Change</button>
//     </>
//   )
// }

// useEffect Hook
// import { useState } from "react";
// import { useEffect } from "react";


// export default function App() {
//   const[count,setCount]=useState(0)
// useEffect(()=>{
//   setTimeout(()=>{
//     setCount(prev=>prev+1)
//   },1000)
// },[count]
// )
//   return (
//     <>
//     <h1>I have rendered {count} times</h1>
//     </>
//   )
// }

// import { useState } from "react";
// import { useEffect } from "react";
// import { useRef } from "react";

// import React from 'react'

// export default function App() {
//   const[count,setCount]=useState(0)
// const [value,setValue]=useState(0)
// useEffect(()=>
//   setValue(prev=>prev+1
//   )
// )
// const val=useRef(0)
// useEffect(()=>
// {
//   val.current=val.current+1
// },[count])
//   return (
//     <>
//     <button onClick={()=>setCount(prev=>prev-1)}>-1</button>
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(prev=>prev+1)}>+1</button>
//     <h2>render count{val.current}</h2>
//     </>
//   )
// }

// import { useState } from "react";


// export default function App() {
//   const[count,setCount]=useState("Harish")
//   const change=()=>{
//     setCount(

//     )
//   }
//     return (
//     <>
//     <h1> my name is {count}</h1>
//     <button onClick={change}>Change</button>
//     </>
//   )
// }
// import { createContext } from "react";
// import { useState } from "react";
// import { useContext } from "react";
// const UserN=createContext()
// export default function App() {
//   const [user]=useState("React")
//     return (
//     <UserN.Provider value={user}>
//     <h1>Learning react Hooks</h1>
//     <C1/>
//     </UserN.Provider>
//   )
// }
// function C1(){
//     return(
//         <>
//         <h1>Compo1</h1>
//         <C2/>
//         </>
//     )
// }
// function C2(){
//     return(
//         <>
//         <h1>Compo2</h1>
//         <C3/>
//         </>
//     )
// }
// function C3(){
//     return(
//         <>
//         <h1>Compo3</h1>
//         <C4/>
//         </>
//     )
// }
// function C4(){
//     const Har=useContext(UserN)
//     return(
//         <>
//         <h1>Compo1</h1>
//         <h1>{`The Hook i am learing is from ${Har}`}</h1>
//         </>
//     )
// }

// import React from 'react'

// export default function App() {
//   return (
//     <>
//   <h2>Login Form</h2>  
//   <input type="text" placeholder='Enter Name' />
//     </>
//   )
// }

// import React from 'react';
// import Ele from './Components/Ele';
// import Arrow from './Components/Arrow'
// import Mad from './Components/Mad'
// import Root from './Route/route';
// export default function App() {
//   return (
//     <>
//     <Root></Root>

//     </>
//   )
// }


import React from 'react'
import Log from './Components/Log'
export default function App() {
  return (
    <>
    <Log/>
    </>
  )
}
