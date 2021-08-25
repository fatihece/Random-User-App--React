import React from 'react'
import "./Card.css"
import email from "../assets/email.svg"
import location from "../assets/location.svg"
import phone from "../assets/phone.svg"

const Card = ({item}) => {
    return (
        
        <div className="container mt-5">
            <div className="info-box"> 
                <div className="box">
                    <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH9Qo-qgAh4JYCzZnDYpHNlIqnEm7N526slHUL6dKzoxvTsGDoEL1pxrM-E_BIHANDUpQ&usqp=CAU"></img>    
                    <span><h3>Polat Çakır</h3></span>
                </div>
                <div className="box">
                    <img height={40} width={40} src={email} alt="email"></img>   
                    <span><p>email@email.com</p></span>
                </div>
                <div className="box">
                    <img height={40} width={40} src={phone}></img>
                    <span><p>0507 489 66 33</p></span>  
                </div>
                <div className="box">
                    <img height={40} width={40} src={location}></img>
                    <span><p>Çerkezköy - Tekirdağ</p></span>
                </div>  
            </div>
            <div className="footer">
                <p>Age:40</p>
                <p>Register Date:12-12-2037</p>
            </div>       
        </div>
    )
}

export default Card;
