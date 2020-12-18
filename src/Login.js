import React, { useState } from 'react'
import "./Login.css"
import { auth } from "./Firebase"
import TodoList from './TodoList'

export default function Login() {
    
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState("")

  const login = () => {
      auth.signInWithEmailAndPassword(email, password)
      .then(() => {
          setLoggedIn(true)
          console.log(setLoggedIn)
      })     
  }

  const register = () => {
      auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
          setLoggedIn(true)
      })
  }

  const signOut = () => {
      setLoggedIn(false)
  }

  if(loggedIn) return (
    <div><center><h1 className="title">{name}'s To-do list</h1>
    <TodoList /> 
    <button className="signOutButton" onClick={signOut}>SIGN OUT</button></center></div>)

return (
<div className="login">


        <input type="text" placeholder="Your name" onChange={event => setName(event.target.value)} value={name} />
        <input type="email" placeholder="Email address" onChange={event => setEmail(event.target.value)} value={email} />
        <input type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} value={password}/>
 
    <button className="button" onClick={login}>Sign-in</button>
    <button className="button" onClick={register}>Create new account</button>
   <div className="default-details">
    <h4><u>User details for recruiters and potential employers</u></h4>
    <h4>Name: Test</h4>
    <h4>Email: Test@test.com </h4>
    <h4>Password: 123456</h4>
    </div>
 </div>


)
}