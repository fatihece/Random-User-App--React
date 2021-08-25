import './App.css';
import Button from './components/Button';
import Card from "./components/Card"
import axios from "axios";
import { useState,useEffect } from 'react';

const App = () => {
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  




  useEffect(() => {
    axios
      .get("https://randomuser.me/api/").then(res => setImage(res.data.results[0].picture.large))
    axios  
    .get("https://randomuser.me/api/").then(res => setEmail(res.data.results[0].email))
    axios  
    .get("https://randomuser.me/api/").then(res => setCell(res.data.results[0].cell))
    axios  
    .get("https://randomuser.me/api/").then(res => setName(res.data.results[0].name.first))
    axios  
    .get("https://randomuser.me/api/").then(res => setCountry(res.data.results[0].location.country))
 
    axios  
    .get("https://randomuser.me/api/").then(res => setAge(res.data.results[0].dob.age))
})

    

  return (
    <div className="App">
      <Card image={image} email={email} cell={cell} name={name} country={country} age={age}/>
      <Button />

    </div>
  );

  }

export default App;
