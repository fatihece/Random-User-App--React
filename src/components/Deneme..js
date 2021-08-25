import React from 'react'
import "./Deneme.css"
import email from "../assets/email.svg"
import location from "../assets/location.svg"
import phone from "../assets/phone.svg"

const Deneme = (props) => {
    return (
        
        <div className="container">
            <div className="info-box"> 
                <div className="box">
                    <img className="avatar" src="https://i.pinimg.com/originals/25/29/4d/25294d1003ffe106463b5484e19aab30.jpg"></img>    
                    <span><h3>fatih canan</h3></span>
                </div>
                <div className="box">
                    <img height={40} width={40} src={email} alt="email"></img>   
                    <span><p>email@email.com</p> </span>
                </div>
                <div className="box">
                    <img height={40} width={40} src={phone}></img>
                    <span><p>472 60 22</p></span>  
                </div>
                <div className="box">
                    <img height={40} width={40} src={location}></img>
                    <span><p>Çerkezköy-Tekirdağ</p></span>
                </div>  
            </div>
            <div className="footer">
                <p>Age:40</p>
                <p>Register Date:12-12-2037</p>
            </div>  
            
        </div>

      
        
            
    
    )
}

export default Deneme
