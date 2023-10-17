import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

export default function Form(
  {isSignInPage=true,}
) {
  const [data,setData]=useState({
    ...( !isSignInPage && { fullName:'' } ),
    email:'',
    password:'',
  })
  const navigate=useNavigate()
  return (
    <>
    <div className='h-screen flex justify-center items-center bg-primary'>
    <div className="bg-white h-[500px] w-1/2 shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className='text-4xl font-bold'>welcome {isSignInPage && 'Back'}</div> 
      <div className='text-xl font-light mb-6'>{isSignInPage ? 'sign up to get started' : 'sign in to explore'}</div>
      <form className='flex flex-col w-full items-center'  onSubmit={()=>{console.log(data)}}>
     {!isSignInPage && <Input type='text' value={data.fullName} onChange={(e)=>setData({...data,fullName:e.target.value})} label="Full name" name='name' placeholder='enter your name' className='mb-6'/>}
      <Input type='email' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} label="Email address" name='email' placeholder='enter your email ' className='mb-6'/>
      <Input type='password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} label="Password" name='password' placeholder='enter your password' className='mb-6'/>
      <Button  label={isSignInPage? 'Sign in' : 'Sign up' } className='w-1/2 mb-2' type='submit'/>
      </form>
      <div>{!isSignInPage? "Already have an account?" : "Don't have an account"}<span className="text-primary cursor-pointer underline m-2" onClick={()=>navigate(`/users/${!isSignInPage? "sign_in":"sign_up"}`)}>{!isSignInPage? "Sign in":"Sign up"}</span></div>
    </div>

    </div>

    </>
  )
}

