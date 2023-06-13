import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Login from "./Login";
import User from "./User"


export default function App() {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        getComments();
    }, []);

    const getComments = () => {
        fetch('http://localhost:3000/comments')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setComments(data);
        })
    }


    return( <>
            
    <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login/>} />
        <Route path="comment" element={<User comments={comments}/>} />
    </Routes>

    </>)
}
