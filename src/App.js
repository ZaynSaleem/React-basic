import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  // const name = "nkad";
  const obj = {
    name: "Hello World Object",
  };
  const data = ["We", "are", "United"];

  const list = [
    { name: "Hello World 1" },
    { name: "Hello World 2" },
    { name: "Hello World 3" },
  ];

  const complex = [
    { company: "XYZ", jobs: ["Javascript", "React"] },
    { company: "ABC", jobs: ["AngularJs", "Ionic"] },
  ];

  // const state = {
  //   persons : []
  // }

  // const [persons, setPerson] = useState(0);

  let [posts, setPosts] = useState([]);
  let [users, setUsers] = useState([]);
  const [check, setCheck] = useState([]);

  useEffect(() => {
    // axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
    //   //  console.log(res.data);
    //   const user = res.data;
    //   //  arr.push(res.data);
    //   setPosts(user);
    //   // console.log(setPerson);
    // });
  }, []);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const user = res.data;
      setUsers(user);
    });

    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      //  console.log(res.data);
      const postt = res.data;
      //  arr.push(res.data);
      setPosts(postt);
      // console.log(setPerson);
    });
  }, []);

  // console.log(posts);
  // console.log(users);
  let userData = [];
  users.map((index) => {
    // uid.push(index.id),
    posts.map((item) => {
      if (item.userId == index.id) {
        let obj = {
          name: index.name, 
          email: index.email, 
          title: item.title };

          userData.push(obj);
      }

      // item.userId == index.id && setCheck({ title : item.title,name : index.name,email: index.email })
    });
  });
  console.log(userData);

  return (
    <div className="App">
      <div>
        {userData.length &&
          userData.map((per, index) => (
            <div key={index}>
              <p><b>USER NAME</b> :  {per.name}</p>
              <p><b>USER EMAIL </b>{per.email}</p>
              <p><b>TITLE : </b>{per.title}</p> <br></br>
            </div>
          ))}
      </div>

    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //      Hello World!
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <div className="App">
    //   <p>{name}</p>

    //   <ul>
    //     {data.map((index) => (
    //       <li>{index}</li>
    //     ))}
    //   </ul>

    //   <div>
    //     {complex.map((complex, index) => (
    //       <div key={index}>
    //         <h3>{complex.company}'s Company</h3>
    //         <div>
    //           {complex.jobs.map((c)=>(
    //             <p >{c}</p>
    //           ))}
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   {list.map((item) => (
    //     <p>{item.name}</p>
    //   ))}

    //   <h1>{obj.name}</h1>
    //   <Greet />
    //   <Welcome />
    // </div>
  );
}

export default App;
