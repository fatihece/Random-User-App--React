import './App.css';
import Button from './components/Button';
import Card from "./components/Card"
import axios from "axios";
import { useState,useEffect } from 'react';

const App = () => {
  const [refresh, setRefresh] = useState(true);
  
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
