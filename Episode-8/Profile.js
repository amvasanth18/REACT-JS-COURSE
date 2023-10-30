import { useEffect, useState } from "react";

const Profile=(props)=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("React webseries")
         },1000)
        console.log("useEffect")
        return()=>{
            clearInterval(timer);
            console.log("useEffect Return");
        }
    },[])
    return(
        <div className="user">
            <h3>Name:{props.name}</h3>
            <h3>Count:{count}</h3>
            <button 
            onClick={()=>{
                setCount(count+1);
            }}>
                count
            </button>
        </div>
    )
}
export default Profile;