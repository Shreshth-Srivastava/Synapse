import { p } from 'motion/react-client';
import React, {useEffect, useState } from 'react'

const Login = ({handleLogin, data}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [employees, setEmployees] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    if(data){
      setEmployees(data.employees);
      setAdmin(data.admin);
    }
  }, [data])

  const submitHandler = (e) =>{
    e.preventDefault();
    
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  }

  return (
    <div className='w-screen h-max md:h-screen flex flex-col md:flex-row justify-center items-center gap-4 p-4'>
      <div className='w-full md:w-1/2 flex flex-col items-center justify-center gap-4'>
        <div className='w-full bg-[hsl(0,0%,20%)] p-4 rounded'>
          <h1 className='text-xl'>Employees Credentials</h1>
          <div>
          <br />
          <div className='w-full grid grid-cols-[1fr_4fr_1fr] gap-4 md:text-lg'>
            <p>Name</p>
            <p>Email</p>
            <p>Password</p>
          </div>
          <br />
          </div>
          {employees ?
            employees.map((e, idx)=>{
              return(
                <div key={idx} className='w-full grid grid-cols-[1fr_4fr_1fr] gap-4 text-xs md:text-base'>
                  <p>{e.firstName}</p>
                  <p>{e.email}</p>
                  <p>{e.password}</p>
                </div>
              )
            })
          : "hello"}
        </div>

        <div className='w-full bg-[hsl(0,0%,20%)] p-4 rounded'>
          <h1 className='text-xl'>Admin Credentials</h1>
          <div>
          <br />
          <div className='w-full grid grid-cols-[1fr_4fr_1fr] gap-4 md:text-lg'>
            <p>Name</p>
            <p>Email</p>
            <p>Password</p>
          </div>
          <br />
          </div>
          {employees ?
            admin.map((e, idx)=>{
              return(
                <div key={idx} className='w-full grid grid-cols-[1fr_4fr_1fr] gap-4 text-xs md:text-base'>
                  <p>{e.firstName}</p>
                  <p>{e.email}</p>
                  <p>{e.password}</p>
                </div>
              )
            })
          : "hello"}
        </div>
      </div>

      <form 
      className='min-w-1/4 min-h-max md:min-h-1/3 flex flex-col p-12 justify-start items-center gap-8 rounded-xl border-2 border-zinc-400' 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      >
        <h1 className='font-bold text-4xl my-10'>Login</h1>
        <input 
        required
        value={email} 
        type="email" 
        placeholder='Enter Email' 
        className='bg-[hsl(0,0%,20%)] text-xl w-full p-2 text-center rounded-sm' 
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        />
        <input 
        required 
        value={password}
        type="password" 
        placeholder='Enter Password' 
        className='bg-[hsl(0,0%,20%)] text-xl w-full p-2 text-center rounded-sm' 
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        />
        <button type="submit" className='bg-gray-200 hover:bg-[hsl(0,0%,70%)] text-black w-full py-2 rounded-sm cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default Login
