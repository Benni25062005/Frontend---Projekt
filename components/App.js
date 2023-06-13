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
        fetch('http://localhost:3000/db')
            .then(res => {return res.json()})
            .then(data => {
                console.log(data.length);

                const firstcomments = data.slice(0,20)
                setComments(firstcomments);

            })
                .catch(function(err){
                console.log(err);
            });
};

if (comments === null) {
    return <div>Loading...</div>
}


    return( <>
        
    <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login/>} />
        <Route path="comment" element={<User comments={comments}/>} />

    </Routes>

    

    </>)
}