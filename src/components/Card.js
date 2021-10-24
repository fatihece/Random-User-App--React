import { useState, useEffect } from 'react';
import axios from "axios";
import Button from './Button';
import "./Card.css"
import email from "../assets/email.svg"
import location from "../assets/location.svg"
import phone from "../assets/phone.svg"

const Card = () => {
    const [item, setItem] = useState("");
    const [refresh, setRefresh] = useState(true);
  
    const onButtonClick = () => {
        setRefresh(!refresh)
      }
  
    
    useEffect(() => {
        axios.get("https://randomuser.me/api/")
        .then((res) => setItem(res.data.results[0]))
    }, [refresh])
    console.log(item)


    return (
        
        <div className="container mt-5">
            <div className="info-box"> 
                <div className="box">
                    <img className="avatar" src={item?.picture?.large} alt=""/>   
                    <h3>{item?.name?.title} {item?.name?.first} { item?.name?.last}</h3>
                </div>
                <div className="box">
                    <img height={40} width={40} src={email} alt="email"/>
                    <p>{item?.email}</p>
                </div>
                <div className="box">
                    <img height={40} width={40} src={phone} alt="phone"/>
                    <p>{item?.cell}</p>
                </div>
                <div className="box">
                    <img height={40} width={40} src={location} alt="location"/>
                    <p>{item?.location?.city} / {item?.location?.country}</p>
                </div>  
            </div>
            <div className="footer">
                <p>{`Age: ${item?.dob?.age}`}</p>
                <p>{`Register Date: ${item?.registered?.date.slice(0,10)}`}</p>
            </div>
            <Button onButtonClick={onButtonClick}/>
        </div>
    )
}

export default Card;
