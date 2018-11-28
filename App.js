import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Context from './Context'
import Header from './Header'
import Main from './Main'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB0EZk-mmGOjsDp5ZT0nUTXV5cGPiIJk6g",
    authDomain: "the-clinic-859da.firebaseapp.com",
    databaseURL: "https://the-clinic-859da.firebaseio.com",
    projectId: "the-clinic-859da",
    storageBucket: "the-clinic-859da.appspot.com",
    messagingSenderId: "625111187901"
  };
  firebase.initializeApp(config);




class App extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render () {
        return (
           <Context.Provider>
               <Header />
               <Main />
           </Context.Provider>
        )
    }
}


ReactDOM.render(<App />,document.getElementById('root'))

export default App