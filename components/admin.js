import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Stylesheet.css";
import HamburgerIcon from "../img/hamburgericon.png"
import styled from "styled-components";


export default function User({user}) {
    
    const showUser = () => {
        console.log(user)
    }

    return<>
        <button onClick={showUser}>user</button>

        

    </>
}





