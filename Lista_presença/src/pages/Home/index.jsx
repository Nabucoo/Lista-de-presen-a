import React, { useState, useEffect } from "react";
import './style.css'
let keys = 0

import { Card } from '../../components/Card'


export function Home() {
 const [studentName, setStudentName] = useState("");
 const [students, setStudents] = useState([]);
 const [user, setUser] = useState({ name: "", avatar: "" });

 function handleAddStudent(){
  const newStudent = {
    name: studentName,
    time: new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
 };

 setStudents(prevState => [...prevState, newStudent]);
 }

 useEffect(() => {
  async function fetchData() {
    const response = await fetch("https://api.github.com/users/Nabucoo")
    const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url
      });
  }
  fetchData();
}, []);

  return (
   <div className="container">
    <header>
    <h1>LISTA DE PRESENÇA</h1>
    <div>
      <strong>{user.name}</strong>
      <img src={user.avatar} alt="foto de perfil" />
    </div>
    </header>
   

   <input type="text" placeholder="Digite um nome..." onChange={e => setStudentName(e.target.value)}/>

   <button type="button" onClick={handleAddStudent}>Adicionar</button>

  {
    students.map(student => 
    <Card 
    {...keys += 1}
    key={keys}
    name={student.name} 
    time={student.time}/>)
    
  }
   </div>
  );
}