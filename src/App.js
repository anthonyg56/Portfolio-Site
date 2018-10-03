import React, { Component } from 'react';
import Card from './Components/TopLevel/Card.jsx';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      Data: null,
    }
  }

  componentDidMount(){
    let data = <Card />;
    this.setState({
      Data: data
    })
  }

  render() {
    return (
      <div className="App">
        <div className="app-data">
          {this.state.Data}
        </div>
      </div>
    );
  }
}

export default App;
