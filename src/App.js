// import React, { Component } from 'react'
// import Table from './component/Table'
// import Form from './component/Form'


// export default class App extends Component {
//   state = {
//     employee : [{
//       name : 'amir',
//       job : 'fullstack'
//     },
//     {
//       name : 'amir2',
//       job : 'fullstack'
//     },
//     {
//       name : 'amir2',
//       job : 'fullstack'
//     }]
//   }
//   delEmploye = index => {
//     const {employee} = this.state

//     this.setState({
//       employee : employee.filter((person, i) => {
//         return i !== index
//       })
//     })
  
//     }
//     handleSubmit = employee => {
//       this.setState({employee : [...this.state.employee, employee]})
//   }
//   render() {
//    const {employee} = this.state
//     return (
//       <div>
//         <Table employeeData = {employee} delEmploye={this.delEmploye}/>
//         <Form handleSubmit={this.handleSubmit}/>
//       </div>
     
//     )
//   }
// }




//import React from 'react'
// import Another from './MakeText'

// function App(){

// return (
//   <div className="body">

//   <Another />
//   <Another name="amir"/>
//   <Another name="amir2"/>
//   <Another name="amir3"/>
//   <Another name="amir4"/>
//   <Another name="amir5"/>
//   <Another name="amir6"/>
//   <Another name="amir7"/>







//   </div>
// )

// }



/* import Heelo from "./TextFromAnother"
function App(){



  return (
    <div>
      <h1> hello from react</h1>
      <p> "alert form reac"</p>
      <Heelo />
      <p>frmo app.js</p>
      <button>clik me</button>
     


    </div>
  )

  
}*/

// export default App

import React, { Component } from "react";
import logo from "./assets/my.jpg";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  componentDidMount = () => {
    fetch(`https://api.github.com/users/Amirullah23`)
      .then(Response => {
        return Response.json();
      })
      .then(data => {
        this.setState({ name: data.name });
        this.setState({ id  : data.login });
        this.setState({ loc : data.location });
        this.setState({ num: data.public_repos });
        this.setState({ bio: data.bio });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
          <h1>{this.state.name}</h1>
<section id="bio">
    <p>ID GitHub { this.state.id}</p>
          <p>Email : amirullah.kasang@gmail.com</p>
    <p>Bio : {this.state.bio}</p>
    <p>My Repo Github {this.state.num}</p>
          <p>Location {this.state.loc} </p>
          </section>




          
        </header>
      </div>
    );
  }
}



export default App;

