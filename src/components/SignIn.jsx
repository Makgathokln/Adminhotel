import React from 'react'
import { Link } from 'react-router-dom'
import './Stylling.css'
import profile_pic from '../Images/profile_pic.png'
import personal_information from '../Images/personal_information.png'
import On_the_office from '../Images/On_the_office.png'
function SignIn() {
    return (
    <>
        <div className='container'>
          <div>
            <img className='avatar' src={On_the_office}/>
          </div>
          <div className='login-container'>
            <form action='index.html'>
            <img src={profile_pic} className='profilepic'/>
            <h1>SignIn</h1>  
            <div className='input-div one focus'>
            <div className='i'>
              <i className='fas fa-user'></i>
            </div>
            <div>
              <h5>Username</h5>
              <input className='input' type="text"></input>
            </div>
            </div>
            <div className='input-div two focus'>
            <div className='i'>
              <i className='fas fa-lock'></i>
            </div>
            <div>
              <h5>Password</h5>
              <input className='input' type="password"></input>
            </div>
            </div>
            <Link to="/Forgetpassword">Forgot Password</Link>
            <input type="submit" className='btn' value="Login"></input>
            <Link to="/Register">Register</Link>
            </form>
          </div>
          
        </div>
        </>
    )
}

export default SignIn