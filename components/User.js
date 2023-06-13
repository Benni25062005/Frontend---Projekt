import React, { useEffect } from "react";
import "./Stylesheet.css";


export default function User({comments}) {
    useEffect(() => {
        getComments();
    }, [comments])

    const getComments = () => {
       console.log(comments)
    }

    return<>
        <h1 className="text-center text-2xl bg-slate-200 rounded-xl w-1/4 mx-auto mt-5 -mb-3 p-1">Kommentare</h1>
        
        <div className="grid bg-slate-200 mx-auto w-1/2 h-[40rem] rounded-xl mt-10 ">
            <div className="grid grid-cols-2  place-items-center">
                
                    <div className=" bg-slate-100 rounded-xl shadow-lg w-64 h-36 " >
                        
                    </div>
                
            
                <div className=" bg-slate-100 rounded-xl shadow-lg w-64 h-36 ">
                        
                </div>
                
            </div>
            
            <div className="grid">
                <div className="grid  place-items-end ">
                    <div className="p-6 w-3/5 h-42  bg-slate-100 rounded-xl shadow-lg mx-auto mb-6 ">
                	    <textarea  className="bg-slate-100 border-2 border-gray rounded-xl p-2 resize-none w-full h-20  " maxLength="150" id="comment" placeholder="Kommentar hinzufügen..." /> 
                        <button className="ml-64 mt-4 border-2 border-transparent bg-sky-400 rounded-xl p-1" onClick={getComments}  id="btnsubmit">Kommentieren</button>
                    </div>
                </div>   
            </div>
               
        </div>
        
    </>
}




