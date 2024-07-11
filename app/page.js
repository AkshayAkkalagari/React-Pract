"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import Header from '@/Components/Header';
import { MyContext } from './Helper/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// HEADER

// import axios from 'axios';
// import Header from '@/Components/Header'  => const page 1

// const page = () => {
//   const [user, setUser] = useState("Akshay")
//   return (
//     <>
//     <Header user={user}/>
//     Main page
//     </>
//   )
// }

//------------------------------------------------------------------------------------------------------

// AXIOS and UseState / UseEffect

// const page = () => {
//   const [Images,setImages] = useState([])

//   // useEffect auto runs the functions
//   useEffect(() => {
//     getImages()
//   }, [])

//   const getImages = async () => {
//     try {
//       const response = await axios.get("https://picsum.photos/v2/list")
//       const data = response.data
//       setImages(data)
//       console.log(Images);
//     } catch (error) {
//       console.error("Error Fetching Images")
//     }
//   }
//   return (
//     <div>
//       <button onClick={getImages} className='px-5 py-3 bg-green-600 text-white font-bold'>Get Images</button>
//       <div className='p-10'>
//         {Images.map((elem,i)=>{
//           return <img 
//             key={i} 
//             src = {elem.download_url} 
//             width={300} 
//             height={300} 
//             className='m-10 rounded inline-block' 
//           />
//         })}
//       </div>
//     </div>
//   )
// }

//---------------------------------------------------------------------------------------------------------

// TWO-WAY BINDING

// const page = () => {
//   const [username, setUsername] = useState("")
//   return (
//     <div>
//       <h1 className='mb-5 text-2xl'>Enter Your Name: </h1>
//       <form>
//         <input 
//           type="text" 
//           className='border-2 border-zinc-600 px-4 py-2 text-xl' 
//           value={username} 
//           onChange={(e)=>{
//             setUsername(e.target.value)
//           }}
//         />
//       </form>
//     </div>
//   )
// }

//----------------------------------------------------------------------------------------------------------


// Routing and Dynamic Routing / App Routing

// const page = () => {
//   return (
//     <>
//       <h1 className='text-2xl font-bold'>This is Home page</h1>
//       <a href='/Contact'>Contact</a>
//     </>
//   )
// }

//----------------------------------------------------------------------------------------------------------


// Routing and Dynamic Routing / App Routing

// created folder [id] and used page.js from it
// const page = () => {
//   const [users,setusers] = useState([])
//   const getUsers = async ()=>{
//     const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
//     setusers(data)
//   }

//   useEffect(()=>{
//     getUsers()
//   }, [])
  
//   return (
//     <>
//       <button onClick={getUsers} className='bg-green-600 text-white px-4 py-2 rounded font-bold'>Get Data</button>
//       <div className='p-8 bg-slate-100 mt-5'>
//         <ul>
//         {users.map((e)=>{
//           return <li>{e.username} ---- <a href={`/${e.id}`}>Explore</a></li>
//         })}
//         </ul>
//       </div>
//     </>
//   )
// }


//----------------------------------------------------------------------------------------------------------

// Context API -> Explation code

// const page = () => {
//   const [num, setnum] = useState(10)
//   return (
//     <div>
//       <Header num={num}/>
//     </div>
//   )
// }

// Context API -> Actual code

// const user = useContext(MyContext) => this line gives access of mycontext data

// const page = () => {
//  const user = useContext(MyContext)
//  console.log(user)
//   return (
//     <div>
//       {user}
//       <Header/>
//     </div>
//   )
// }


//----------------------------------------------------------------------------------------------------------

// React Toastify -> flash messages

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const notify = () =>{
    
    // to change location or add any effects jst copy paste the toaste-emitter code here instead of toast
    // toast("login successfull")
    toast('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark", 
      });
  }
  return (
    <div>
      <button onClick={notify}>Login</button>
      <ToastContainer />
    </div>
  )
}


export default page
