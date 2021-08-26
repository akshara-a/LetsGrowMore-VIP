import React, { useState } from "react";
import './styles.css';

const App=() =>{
  const [userData, setUsers] = useState([]);
  const loadUsers = async()=>{
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
  };
  return (
    <div className = "App">
      <div id="ButtonDiv">
        <button onClick={loadUsers}> Get data </button>
      </div>
      
      <div className="card-group">
        {userData.map(data=>(
          <div className="card" key={data.id}>
            <img src={data.avatar} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5> {data.first_name} {data.last_name} </h5>
              <p> {data.email} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;