import { useState } from "react";

export default function Form() {
//Making an Object of State Variables
  let [formData, setFormData] = useState({
    username:"",
    gmail:""
  });

  let handleChange = (event) => {
    let fieldName=event.target.name;    //fieldName Consist with StateVariable Object keys
    let newValue=event.target.value;    //newValue consist of the new the newValue what we give
    setFormData((currdata)=>{
        return {...currdata, [fieldName]:newValue };    
        //all the data Must same, just jei key tew change hych setar value ta k change koro
    })
  };
  


  let onSubmit = (event) => {
    //just print them into console
    event.preventDefault();
    console.log("Username:"+formData.username + "    "+"Mail:"+ formData.gmail);
    //clean the data while the form got submitted
    setFormData({
        username:"",
        gmail:""
      })
  };



  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Username</label>
      <input
        placeholder="Enter your name"
        type="text"
        value={formData.username}
        onChange={handleChange}
        id="username"
        name="username"
      ></input>
      <br></br>
      <label htmlFor="gmail">Gmail</label>
      <input
        placeholder="Enter your gmail"
        type="email"
        value={formData.gmail}
        onChange={handleChange}
        id="gmail"
        name="gmail"
      ></input>
      <button type="submit" style={{backgroundColor:"red"}}>Submit</button>
    </form>
  );
}
