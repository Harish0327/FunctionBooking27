import React from 'react'
import { Link } from 'react-router-dom'

export default function Ele() {
  return (
    <>
    <div className='Log'>
    <h1>Login form</h1>
    <label htmlFor="">
        <input type="text" placeholder='Enter Name' /> <br /><br />
        <input placeholder='Enter Age '/> <br /><br />
        <input type="text" placeholder='Enter Phone Number' /><br /><br />
        <Link to="/mad"> <button>  Sumbbit</button></Link>
        
    </label>
    </div>

    </>

  )
}
