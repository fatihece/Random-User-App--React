import './App.css';
import Button from './components/Button';
import Card from "./components/Card"
import axios from "axios";
import { useState,useEffect } from 'react';

const App = () => {
  const [refresh, setRefresh] = useState(true);
  
//   useEffect(() => {
//     axios
//     .get("https://randomuser.me/api/").then(res => setImage(res.data.results[0].picture.large))
//     axios  
//     .get("https://randomuser.me/api/").then(res => setEmail(res.data.results[0].email))
//     axios  
//     .get("https://randomuser.me/api/").then(res => setCell(res.data.results[0].cell))
//     axios  
//     .get("https://randomuser.me/api/").then(res => setName(res.data.results[0].name.first))
//     axios  
//     .get("https://randomuser.me/api/").then(res => setCountry(res.data.results[0].location.country))
//     axios  
//     .get("https://randomuser.me/api/").then(res => setAge(res.data.results[0].dob.age))
//     axios  
//     .get("https://randomuser.me/api/").then(res => setDate(res.data.results[0].registered.date))
// },[refresh])

  const onButtonClick = () => {
      setRefresh(!refresh)
    }

  const [item, setItem] = useState("");

  useEffect(() => {
    axios.get("https://randomuser.me/api/")
      .then((res) => setItem(res.data))
  }, [refresh])
  
console.log(item)
  return (
    <div className="App">
      <Card
        image={item.results[0].picture.large}
        title={item.results[0].name.title}
        last={item.results[0].name.last}
        email={item.results[0].email}
        cell={item.results[0].phone}
        name={item.results[0].name.first}
        country={item.results[0].location.country}
        age={item.results[0].dob.age}
        date={item.results[0].registered.date.slice(0, 10)} />
    
      <Button onButtonClick={onButtonClick}/>

    </div>
  );

  }

export default App;
