import React, {useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) =>{
    e.preventDefault();
    
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <form 
      className='min-w-1/3 min-h-2/3 flex flex-col p-16 justify-start items-center gap-8 rounded-4xl border-2 border-zinc-400' 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      >
        <h1 className='font-bold text-4xl mb-16'>Login</h1>
        <input 
        required
        value={email} 
        type="email" 
        placeholder='Enter Email' 
        className='bg-white text-black text-xl w-full p-2 text-center rounded-sm' 
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        />
        <input 
        required 
        value={password}
        type="password" 
        placeholder='Enter Password' 
        className='bg-white text-black text-xl w-full p-2 text-center rounded-sm' 
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        />
        <button type="submit" className='bg-gray-200 hover:bg-gray-400 text-black w-full py-2 rounded-sm cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default Login
