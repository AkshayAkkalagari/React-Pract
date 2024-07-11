import React from 'react'

const Nav = (props) => {
    console.log(props)
    console.log(props.num)
  return (
    <div className='bg-red-200'>
      Navigation bar {props.num}
    </div>
  )
}

export default Nav
