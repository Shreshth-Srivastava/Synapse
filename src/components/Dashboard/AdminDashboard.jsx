import React from 'react'
import Header from '../Utils/Header'

const AdminDashboard = () => {
  return (
    <div className='w-screen h-max md:h-screen bg-[#1C1C1C]  py-6 px-8'>
      <Header />
      <br />
      <form className='bg-[hsl(0,0%,20%)] w-full h-max p-6 rounded flex flex-col md:flex-row justify-center items-center gap-2 md:gap-20'>
        <div className='w-full h-full flex flex-col gap-4'>
            <div>
                <h3>Task Title</h3>
                <input type="text" placeholder='Title' className='w-full mt-2 p-2 border-2 border-[hsl(0,0%,30%)] rounded'/>
            </div>

            <div>
                <h3>Date</h3>
                <input type="date" className='w-full mt-2 p-2 border-2 border-[hsl(0,0%,30%)] rounded'/>
            </div>

            <div>
                <h3>Assign To</h3>
                <input type="text" placeholder='Employee Name' className='w-full mt-2 p-2 border-2 border-[hsl(0,0%,30%)] rounded'/>
            </div>

            <div>
                <h3>Category</h3>
                <input type="text" placeholder='Eg. Design, Dev, etc.' className='w-full mt-2 p-2 border-2 border-[hsl(0,0%,30%)] rounded'/>
            </div>
        </div> 
        <div className='w-full h-full px-2 pt-8 flex flex-col justify-start gap-6'>
            <textarea rows='10' cols='10' className='w-full bg-[hsl(0,0%,30%)] p-2 resize-none rounded'></textarea>
            <button className='bg-green-500 rounded py-2 cursor-pointer hover:bg-green-600'>Create Task</button>
        </div>
      </form>
      <br />
      <div id='AdminTaskList' className='w-full h-1/4 p-4 flex flex-col gap-4 overflow-auto'>
        <div className='w-full p-4 bg-amber-600 rounded text-center'>Task-1</div>
        <div className='w-full p-4 bg-amber-600 rounded text-center'>Task-2</div>
        <div className='w-full p-4 bg-amber-600 rounded text-center'>Task-3</div>
        <div className='w-full p-4 bg-amber-600 rounded text-center'>Task-4</div>
      </div>
    </div>
  )
}

export default AdminDashboard
