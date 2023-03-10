import React, { Component } from "react";
import Clothes from "../clothes/index.jsx";

class Root extends Component{ 
    render(){
        return(
            <div>
                <Clothes/>
                <a href="https://github.com/vasilakhan0805/shopping/tree/clothes" style={{color:'violet'}}>GitHub Source Code</a>
            </div>
        )
    }
}


export default Root