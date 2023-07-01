import React, { useState } from "react";
import { useEffect } from "react";
//mock data
import data from "./data.json";
//components
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [toDoList, setToDoList] = useState(data);

  // const handleToggle = (id) => {
  //   let mapped = toDoList.map((task) => {
  //     return task.id === Number(id)
  //       ? { ...task, complete: !task.complete }
  //       : { ...task };
  //   });
  //   setToDoList(mapped);
  // };

  // const handleFilter = () => {
  //   let filtered = toDoList.filter((task) => {
  //     return !task.complete;
  //   });
  //   setToDoList(filtered);
  // };

  // const addTask = (userInput) => {
  //   let copy = [...toDoList];
  //   copy = [
  //     ...copy,
  //     { id: toDoList.length + 1, task: userInput, complete: false },
  //   ];
  //   setToDoList(copy);
  // };


  //use state for task list
  const[tasks,setTasks] = useState([]);
  //delete a task
  const deleteTask = (taskName) => {
    axios.get(`http://localhost:10505/api/tasks/${taskName}`).then( res=>{
      window.location.reload(false); //reload the page
         });
  }

  console.log(tasks);
  
  
 

  //each time page is loaded call the api to get current task list
  useEffect(()=>{ 
    axios.get("http://localhost:10505/api/tasks/all").then( res=>{
        setTasks(res.data.results);
         });
},[])

  return (
    <div>
      <h1 className="center">Welcome!</h1>
      <p className="center">This is your 5th check in!</p>
      <h2 className="center ">Tasks to Do:</h2>
      

      {/* map each task object */}
      {
       tasks.map((task) => (
            <div>
              {/* on a checkbox change delete the task that was selected */}
           <h3>{task.taskName}<input type="checkbox" onChange={()=>{deleteTask(task.taskName)}}/></h3>
           
            </div>
        ))
    }
    </div>
  );
};
export default Home;