import React from 'react'

const TaskList = ({tasks}) => {

  var newTasks = [];
  var completedTasks = [];
  var failedTasks = [];
  var activeTasks = []

  tasks.forEach(e => {
    if(e.new_task){
      newTasks.push(e);
    }
    if(e.completed){
      completedTasks.push(e);
    }
    if(e.failed){
      failedTasks.push(e);
    }
    if(e.active){
      activeTasks.push(e);
    }
  });

  console.log(newTasks)

  return (
    <div id='TaskListContainer' className='w-full h-1/2 flex flex-col md:flex-row flex-nowrap items-center justify-start gap-4 overflow-x-auto py-4'>
      {
        newTasks.map((e, idx) => {
          return(
            <div key={idx} className='w-full md:w-1/4 h-full bg-rose-800 rounded-lg p-6 flex shrink-0 flex-col justify-start items-start gap-2'>
              <div className='w-full flex items-center justify-between'>
                <h3 className='bg-red-500 py-2 px-4 rounded-sm'>High</h3>
                <h3>{e.task_date}</h3>
              </div>
              <h1 className='pt-4 text-3xl font-semibold'>Work-1</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, consequatur in eos autem necessitatibus maxime!</p>
            </div>
          )
        })
      }
      
      {tasks.map((e, idx)=>{
        
        if(e.completed){
          return(
            <div key={idx} className='w-full md:w-1/4 h-full bg-yellow-800 rounded-lg p-6 flex shrink-0 flex-col justify-start items-start gap-2'>
              <div className='w-full flex items-center justify-between'>
                <h3 className='bg-red-500 py-2 px-4 rounded-sm'>High</h3>
                <h3>8 July 2025</h3>
              </div>
              <h1 className='pt-4 text-3xl font-semibold'>Work-1</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, consequatur in eos autem necessitatibus maxime!</p>
            </div>
          )
        }
      })}
    </div>
    
  )
}

export default TaskList
