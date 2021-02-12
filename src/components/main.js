import React,{useState} from 'react'
import Test from './Test.json'


export default function Main() {

    const [Show,setShow]=useState("");
    const [AllShow,setAllShow]=useState("");

    const handelChange=(value)=>{
         setShow(value);
         setAllShow("");
    }

    const AllhandelChange=()=>{
        setShow("");
        setAllShow(Test.members);
    }

    return (
        <div style = {{textAlign:"center"}}>
     {Test.members.map(m => {
         return(
            <button onClick={handelChange.bind(this,m)} style={{width:"10%",margin:"2rem",padding:"1rem"}}>Id: {m.id}</button>
         )
           
         })}
         
            <button onClick={AllhandelChange.bind(this)} style={{width:"10%",margin:"2rem",padding:"1rem"}}>All</button>
         
        <div>
                     {Show!==""?
                     <>
                    <h1>Id : {Show.id}</h1>
                    <h3> Name : {Show.real_name}</h3>
                    <h1> {Show.tz}</h1>
                    {Show.activity_periods.map(val =>{
                        return(
                            <>
                            <p>Start Time : {val.start_time}</p>
                            <p>Ending Time : {val.end_time}</p>
                            </>
                        )
                    }
                    )}</>
                
:""} 


{AllShow!==""?
 AllShow.map(m => {
     debugger
                 return(   
                      <>
                     
                    <h1>Id : {m.id}</h1>
                    <h3> Name : {m.real_name}</h3>
                    <h1>{m.tz}</h1>
                    {m.activity_periods.map(val =>{
                        return(
                            <>
                            <p>Start Time : {val.start_time}</p>
                            <p>Ending Time : {val.end_time}</p>
                            </>
                        )
                    }
                    )}</> )})
                
:""} 


        </div>
        </div>
      
    )
}

