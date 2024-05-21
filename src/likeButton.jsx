import { useState } from "react";
export default function LikeButton(){
    let [isLiked,setIsLiked]=useState(false);
    let likeStyle={color:"red"};
    let toggleLike=()=>{
        setIsLiked(!isLiked);
    };
    return (
        <>
        <p onClick={toggleLike}>
            {isLiked ? (<i className="fa-solid fa-heart" style={likeStyle}></i>) : (<i className="fa-regular fa-heart"></i>)} 
        </p>
        </>
    )
}