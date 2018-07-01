import React, { Component } from 'react';
import logo from './images1.png';
import Client from './Client.js';
import LoginForm from './Login.js';
import './App.css';
import {PerfilPercurso} from './PerfilPercurso.js';

class App extends Component {
  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }

  // App "actions" (functions that modify state)
  signIn(username, password, type) {
    // calling setState will re-render the entire app (efficiently!)
    if(type == 'adm'){
      Client.admLogin(username, password, res => {
        console.log(res.sucess)
        if(res.sucess === 'True'){
          console.log("Fez login como administrador")
          this.setState({
            user: {
              username,
              password,
              type
            }
          })
        } else {
          console.log("Administrador nao cadastrado")
        }
      })
    } else if (type == 'exp'){
      Client.expLogin(username, password, res => {
        console.log(res.sucess)
        if(res.sucess === 'True'){
          console.log("Fez login como explorador")
          this.setState({
            user: {
              username,
              password,
              type
            }
          })
        } else {
          console.log("Erro ao fazer login de explorador")
        }
      })
    }

  }

  signOut() {
    // clear out user from state
    this.setState({user: null})
  }

  render() {
    return (
      <div className="App">
        <LoginForm onSignIn={this.signIn.bind(this)} />
        <PerfilPercurso name="aaa" imgSrc={logo}/>
      </div>
    );
  }
}

export default App;