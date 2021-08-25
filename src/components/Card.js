import React from 'react'
import "./Card.css"
import email from "../assets/email.svg"
import location from "../assets/location.svg"
import phone from "../assets/phone.svg"

const Card = (props) => {
    return (
        
        <div className="container mt-5">
            <div className="info-box"> 
                <div className="box">
                    <img className="avatar" src={props.image}></img>    
                    <span><h3>{props.name }</h3></span>
                </div>
                <div className="box">
                    <img height={40} width={40} src={email} alt="email"></img>   
                    <span><p>{props.email }</p></span>
                </div>
                <div className="box">
                    <img height={40} width={40} src={phone}></img>
                    <span><p>{props.cell }</p></span>
                </div>
                <div className="box">
                    <img height={40} width={40} src={location}></img>
                    <span><p>{ props.country}</p></span>
                </div>  
            </div>
            <div className="footer">
                <p>{props.age}</p>
                <p>Register Date:12-12-2037</p>
            </div>       
        </div>
    )
}

export default Card;
