import React ,{usestate} from "react";

function app(){
  //to store task

  const[tasks, setTasks]=usestate([]);
  //state to store input value
  const[input,setInput]=usestate("");
  //add task
  const addTask=()=>{
    if(input.trim()==="") return;

    const newTask={
      id:Date.now(),
      text:input,
      completed:false,  //in starting we keep the complete status of the task as false
    };

    setTasks([...tasks.newTask]); // ... separate operator ie add new task without removing the old data
    setInput("");

    //delete task
    const deleteTasks=(id)=>{
      setTasks(tasks.filter((task)=>task.id!==id));
    }

  }
}