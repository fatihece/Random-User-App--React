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
                    <img className="avatar" src={props.image} />   
                    <h3>{props.title} {props.name} { props.last}</h3>
                </div>
                <div className="box">
                    <img height={40} width={40} src={email} alt="email"/>
                    <p>{props.email}</p>
                </div>
                <div className="box">
                    <img height={40} width={40} src={phone} alt="phone"/>
                    <p>{props.cell}</p>
                </div>
                <div className="box">
                    <img height={40} width={40} src={location} alt="location"/>
                    <p>{ props.country}</p>
                </div>  
            </div>
            <div className="footer">
                <p>{`Age: ${props.age}`}</p>
                <p>{`Register Date: ${props.date}`}</p>
            </div>       
        </div>
    )
}

export default Card;
