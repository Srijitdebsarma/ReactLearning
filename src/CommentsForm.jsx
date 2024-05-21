import React, { useEffect, useState } from "react";

function CommentsForm() {

//   useEffect(function print(){   //when any rendering happened this hook triggered
//     console.log("Hello!");
//   });   //a hook

  let [comments, setComments] = useState([]); //All Comments
  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: 2,
  });
  let handleChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Add the new comment to the comments list
    setComments((prevComments) => [...prevComments, formData]);
    //resetting the whole form
    setFormData({  
      username: "",
      remark: "",
      rating: 2,
    });
  };
  return (
    <div>
      <h1>Give a comment</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          id="username"
          value={formData.username}
          name="username"
          onChange={handleChange}
          placeholder="enter username"
        />
        <br></br>
        <label htmlFor="remark">Remark : </label>
        <textarea
          type="text"
          id="remark"
          value={formData.remark}
          name="remark"
          onChange={handleChange}
          placeholder="write your remarks..."
          style={{height:"100px"}}
        />
        <br></br>
        <label htmlFor="username">Rating : </label>
        <input
          type="range"
          id="rating"
          value={formData.rating}
          name="rating"
          onChange={handleChange}
          min={1}
          max={5}
        />
        <br></br>
        <button type="submit" style={{ backgroundColor: "red" }}>
         Add !
        </button>
      </form>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p><strong>Username</strong> <i>{comment.username}</i></p>
            <p>{comment.remark}</p>
            <p><strong></strong> {comment.rating}*</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CommentsForm;
