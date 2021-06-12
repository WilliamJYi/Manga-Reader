import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Landing = () => {

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className ="heading">Simple Manga Reader</h1>
                <Link to={"/search/imgur"}>
                    <button className ={'button mt-20'}>Imgur</button>
                </Link>
                <Link to={"/search/mangadex"}>
                    <button className ={'button mt-20'}>MangaDex</button>
                </Link>
            </div>
        </div>
        
    )
}

export default Landing;