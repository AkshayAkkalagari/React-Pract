"use client";
import React, { useContext, useState } from 'react'
import Link from 'next/link';
import Nav from './Nav';
import { MyContext } from '@/app/Helper/Context';

// const Header = (props) => {
//   return (
//     <div className='h-10 px-5 bg-green-400 flex items-center justify-between'>
//       <h2>logo</h2>
//       <h2>{props.user}</h2>
//       <div className='flex gap-8'>
//       <Link href="/About">About</Link> <br></br>
//       <Link href="/Courses">Courses</Link>
//       </div>
//     </div>

//   )
// }

// export default Header

const Header = (props) => {
  console.log(props.num)
  const user = useContext(MyContext)
  return (
    <div className='bg-green-200 p-5'>
      {/* main hoon header
      <Nav num={props.num}/>  //passing data from page to Nav via header */}
      {user}
    </div>
  )
}

export default Header
