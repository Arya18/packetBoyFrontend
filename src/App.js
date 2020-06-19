import React, {Component} from 'react';
import Header from './components/header/header.component';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      text: ''
    };
  }
  render(){
    return (
      <>
        <Header />
      </>
    );
  }
}

export default App;
