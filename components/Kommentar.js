import React from "react";
import "./Stylesheet.css";

export default function Kommentar() {
    return<>
        <h1>Kommentare</h1>        
        
        

        <div class="flex items-center  p-6 bg-slate-100 rounded-xl  space-x-4 top-96 " id="comment">
            <textarea class="bg-slate-100" id="input" placeholder="Kommentar eingeben" />
        </div>

    </>
}
