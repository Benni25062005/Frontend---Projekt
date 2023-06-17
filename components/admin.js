import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Stylesheet.css";
import HamburgerIcon from "../img/hamburgericon.png"
import deletIcon from "../img/delete.png"
import styled from "styled-components";



export default function User({comments}) {
    const [dropDown, setdropDown] = useState(false);

    const toggleDropdown = () => {
        setdropDown(!dropDown)
    };

    const clearStorage = () => {
        localStorage.clear();
    }

    const removeComment = (id) => {
        fetch('http://localhost:3000/comments/'+ id, {
            method: 'DELETE',
        })
        .then(res => res.json())
        
        window.location.reload();
        
        console.log(id)
        console.log("test")
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

        <h1 className="text-center text-2xl bg-slate-200 rounded-xl w-1/4 mx-auto mt-5 -mb-3 p-1">Kommentare verwalten</h1>
        
        <div className="grid bg-slate-200 mx-auto w-1/2 h-max rounded-xl mt-10 ">
            <div className="grid grid-cols-2  place-items-center">
                {comments.map((comment) => (
                    <div className="mb-10 mt-4 bg-slate-100 rounded-xl shadow-lg w-64 h-36 " key={comment.id} >
                        <div className="p-2">
                            <div className="text-sm">
                                Von: {comment.email}
                            </div>

                            <div className="">
                                {comment.body}
                            </div>
                        </div>
                        <img src={deletIcon} className="w-6 ml-56 mt-6" onClick={() => removeComment(comment.id)}></img>
                    </div>
                    
                ))}
  
            </div>
               
        </div>

        

    </>
}





