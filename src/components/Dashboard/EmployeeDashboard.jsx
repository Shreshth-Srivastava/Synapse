import React, { useEffect } from 'react'
import Header from "../Utils/Header"
import MetricCard from "../Utils/MetricCard"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = ({currUser, setUser}) => {
  // useEffect(() => {
  //   const currUserData = JSON.parse(localStorage.getItem(currUserData));
  // }, [])
  
  // const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  // const currUserData = loggedInUser.data;

  const currUserData = currUser.data;
  
  return (
    <div className='w-screen h-max md:h-screen bg-[#1C1C1C]  py-6 px-12'>
      <Header currUserData={currUserData} setUser={setUser}/>
      <br />
      <div className=' w-full h-1/3 grid grid-row-2 md:grid-row-1 grid-cols-2 md:grid-cols-4 gap-4 py-4'>
        <MetricCard digit={currUserData.TaskCount.newTasks} desc='New Tasks' bgcolor='bg-red-400'/>
        <MetricCard digit={currUserData.TaskCount.completedTasks} desc='Completed Tasks' bgcolor='bg-yellow-400'/>
        <MetricCard digit={currUserData.TaskCount.acceptedTasks} desc='Accepted Tasks' bgcolor='bg-blue-400'/>
        <MetricCard digit={currUserData.TaskCount.failedTasks} desc='Failed Tasks' bgcolor='bg-green-400'/>
      </div>
      <TaskList tasks={currUserData.tasks}/>
    </div>
  )
}

export default EmployeeDashboard
