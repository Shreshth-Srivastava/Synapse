import React, { useEffect, useState } from 'react'

const TaskList = ({id, tasks, setUserData}) => {

  const [newTasks, setNewTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [failedTasks, setFailedTasks] = useState([]);
  const [activeTasks, setActiveTasks] = useState([]);  

  const updateTasks = ()=>{
    var newTasks_temp = [];
    var completedTasks_temp = [];
    var failedTasks_temp = [];
    var activeTasks_temp = [];

    tasks.forEach(e => {
      if(e.new_task){
        newTasks_temp.push(e);
      }
      if(e.completed){
        completedTasks_temp.push(e);
      }
      if(e.failed){
        failedTasks_temp.push(e);
      }
      if(e.active){
        activeTasks_temp.push(e);
      }
    });
    
    setNewTasks(newTasks_temp);
    setCompletedTasks(completedTasks_temp);
    setFailedTasks(failedTasks_temp);
    setActiveTasks(activeTasks_temp);
  }

  useEffect(() => {
    updateTasks();
  }, [tasks])

  const taskAccepted = (e)=>{
    e.new_task = false;
    e.active = true;

    var employees = JSON.parse(localStorage.getItem("employees"));
    var employee = employees.find((e)=>e.id = id)

    employee.TaskCount.newTasks -= 1;
    employee.TaskCount.acceptedTasks += 1;
    employee.tasks = tasks;

    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    loggedInUser.data.TaskCount.newTasks -= 1;
    loggedInUser.data.TaskCount.acceptedTasks += 1;
    loggedInUser.data.tasks = tasks;

    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    setUserData(loggedInUser.data)
    updateTasks();
  }

  const taskCompleted = (e)=>{
    e.active = false;
    e.completed = true;

    var employees = JSON.parse(localStorage.getItem("employees"));
    var employee = employees.find((e)=>e.id = id)

    employee.TaskCount.acceptedTasks -= 1;
    employee.TaskCount.completedTasks += 1;
    employee.tasks = tasks;

    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    loggedInUser.data.TaskCount.acceptedTasks -= 1;
    loggedInUser.data.TaskCount.completedTasks += 1;
    loggedInUser.data.tasks = tasks;
    
    localStorage.setItem("employees", JSON.stringify(employees)); 
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser)); 
    setUserData(loggedInUser.data)
    updateTasks();
  }

  const taskFailed = (e)=>{
    e.active = false;
    e.failed = true;

    var employees = JSON.parse(localStorage.getItem("employees"));
    var employee = employees.find((e)=>e.id = id)

    employee.TaskCount.acceptedTasks -= 1;
    employee.TaskCount.failedTasks += 1;
    employee.tasks = tasks;

    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    loggedInUser.data.TaskCount.acceptedTasks -= 1;
    loggedInUser.data.TaskCount.failedTasks += 1;
    loggedInUser.data.tasks = tasks;

    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    setUserData(loggedInUser.data)
    updateTasks();
  }

  return (
    <div id='TaskListContainer' className='w-full h-1/2 flex flex-col md:flex-row flex-nowrap items-center justify-start gap-4 overflow-x-auto py-4'>
      {newTasks.map((e, idx) => {
          return(
            <div key={idx} className='w-full md:w-2/3 lg:w-1/4 h-full bg-blue-800 rounded-lg p-6 grid grid-rows-[1fr_2fr_2fr_1fr] gap-2 shrink-0'>
              <div className='w-full flex items-center justify-between'>
                <h3 className='bg-white text-black py-2 px-4 rounded-sm'>{e.task_category}</h3>
                <h3>{e.task_date}</h3>
              </div>
              <h1 className='pt-4 text-3xl font-semibold'>{e.task_title}</h1>
              <p>{e.task_description}</p>
              <button onClick={()=>taskAccepted(e)} className='bg-yellow-500 hover:bg-yellow-600 cursor-pointer rounded'>Accept</button>
            </div>
          )
        })
      }
      
      {activeTasks.map((e, idx)=>{
        return(
          <div key={idx} className='w-full md:w-2/3 lg:w-1/4 h-full bg-yellow-800 rounded-lg p-6 grid grid-rows-[1fr_2fr_2fr_1fr] gap-2 shrink-0'>
            <div className='w-full flex items-center justify-between'>
              <h3 className='bg-white text-black py-2 px-4 rounded-sm'>{e.task_category}</h3>
              <h3>{e.task_date}</h3>
            </div>
            <h1 className='pt-4 text-3xl font-semibold'>{e.task_title}</h1>
            <p>{e.task_description}</p>
            <div className='w-full grid grid-cols-2 gap-4'>
              <button onClick={()=>taskCompleted(e)} className='bg-green-500 hover:bg-green-600 cursor-pointer rounded'>Completed</button>
              <button onClick={()=>taskFailed(e)} className='bg-red-500 hover:bg-red-600 cursor-pointer rounded'>Failed</button>
            </div>
          </div>
        )
      })}

      {completedTasks.map((e, idx) => {
          return(
            <div key={idx} className='w-full md:w-2/3 lg:w-1/4 h-full bg-green-800 rounded-lg p-6 flex shrink-0 flex-col justify-start items-start gap-2'>
              <div className='w-full flex items-center justify-between'>
                <h3 className='bg-white text-black py-2 px-4 rounded-sm'>{e.task_category}</h3>
                <h3>{e.task_date}</h3>
              </div>
              <h1 className='pt-4 text-3xl font-semibold'>{e.task_title}</h1>
              <p>{e.task_description}</p>
            </div>
          )
        })}

      {failedTasks.map((e, idx) => {
          return(
            <div key={idx} className='w-full md:w-2/3 lg:w-1/4 h-full bg-red-800 rounded-lg p-6 flex shrink-0 flex-col justify-start items-start gap-2'>
              <div className='w-full flex items-center justify-between'>
                <h3 className='bg-white text-black py-2 px-4 rounded-sm'>{e.task_category}</h3>
                <h3>{e.task_date}</h3>
              </div>
              <h1 className='pt-4 text-3xl font-semibold'>{e.task_title}</h1>
              <p>{e.task_description}</p>
            </div>
          )
        })
      }
    </div>
    
  )
}

export default TaskList
