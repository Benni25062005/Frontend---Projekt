import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Stylesheet.css";
import HamburgerIcon from "../img/hamburgericon.png"


export default function User({comments}) {
    const [dropDown, setdropDown] = useState(false);

    const toggleDropdown = () => {
        setdropDown(!dropDown)
    };

    const clearStorage = () => {
        localStorage.clear();
    }
    
    const getComments = () => {
       console.log(comments)
      
    }

    return<>
        <div>
            <img className="w-8 h-8 cursor-pointer" src={HamburgerIcon} onClick={toggleDropdown} />   
            {dropDown && (
                <div className="absolute top-0 left-0 mt-10 bg-white rounded-lg shadow-lg">
                    <ul className="py-2">
                        <Link to="/login">
                            <li className="px-4 py-2" onClick={clearStorage}>Abmelden</li>
                        </Link>
                    </ul>
                </div>
            )}        
        </div>
       
        <h1 className="text-center text-2xl bg-slate-200 rounded-xl w-1/4 mx-auto mt-5 -mb-3 p-1">Kommentare</h1>
        
        <div className="grid bg-slate-200 mx-auto w-1/2 h-[40rem] rounded-xl mt-10 ">
            <div className="grid grid-cols-2  place-items-center">
                {comments.map((comment) => (
                    <div className=" bg-slate-100 rounded-xl shadow-lg w-64 h-36 " key={comment.id} >
                        <div className="p-2">
                            <div className="text-sm">
                                Von: {comment.email}
                            </div>

                            <div className="">
                                {comment.body}
                            </div>
                        </div>
                        
                    </div>
                ))}
                 
                
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




