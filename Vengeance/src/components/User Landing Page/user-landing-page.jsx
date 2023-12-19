import "./user-landing-page.css";
import React from "react";
import { Link } from "react-router-dom";


function userlandingpage() {
    return(
        <>
        <div className="landingpage">
        <div className="sidebar">
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Dashboard</li>
                    <li>Contact</li>
                    <li>Login/Sign Up</li>
                </ul>
            </div>
        </div>
        <div className="landingpage-body">
            <div className="box1">
                <div className="upper">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque, nam veniam laudantium reprehenderit atque velit esse cum optio quam pariatur aliquid! Voluptates, eum sapiente quae laborum deserunt blanditiis necessitatibus!</p>
                </div>
            </div>
            <div className="lower">
            <div className="box2">
                <div className="minibox">
                    <div className="date">December 19, 2023</div>
                    <div className="prototype">webdesigning prototype</div>
                    <div className="progress">
                        <div className="progressbar">

                        </div> 50%</div>
                </div>
                <div className="minibox"><div className="date">December 19, 2023</div>
                <div className="prototype">webdesigning prototype</div>
                <div className="progress">
                    
                        50%</div>
                    </div>
                <div className="minibox"><div className="date">December 19,2023</div>
                <div className="prototype">webdesigning prototype</div>
                <div className="progress">
                   
                    50%</div>
                </div>
                <div className="minibox"><div className="date">December 19, 2023</div>
                <div className="prototype">webdesigning prototype</div>
                <div className="progress">
                    
                    50%</div>
                </div>
              </div>
            <div className="box2">
                <div className="minibox"><div className="date">December 19, 2023</div>
                <div className="prototype">webdesigning prototype</div>
                <div className="progress">
                    
                    50%</div>
                </div>
                <div className="minibox"><div className="date">December 19, 2023</div>
                <div className="prototype">webdesigning prototype</div>
                <div className="progress">
                    
                    50%</div>
                </div>
                <div className="minibox"><div className="date">December 19, 2023</div>
                <div className="prototype">webdesigning prototype</div>
                <div className="progress">
                    
                    50%</div>
                </div>
                <div className="minibox"><div className="date">December 19, 2023</div>
                <div className="prototype">webdesigning prototype</div>
                <div className="progress">
                    
                    50%</div>
                </div>
            </div>
        </div>
            
        </div>
    </div>
        </>
    )
}

export default userlandingpage;