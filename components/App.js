import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Login from "./Login";
import User from "./User"
import Admin from "./admin"
import Register from "./register";


export default function App() {
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        getComments();
    }, []);

    useEffect(() => {
        getUsers();
    }, []);


    const getComments = () => {
        fetch('http://localhost:3000/comments')
        .then(res => res.json())
        .then(data =>{
            setComments(data);
        })
        .catch(error => {
            console.log(error)
        })
    }

    const getUsers = () => {
        fetch('http://localhost:3000/user')
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return( <>
            
    <Routes>
        <Route index element={<Login />} />
        <Route path="admin" element={<Admin user={user}/>} />
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
        <Route path="comment" element={<User comments={comments} />} />
    </Routes>

    </>)
}
