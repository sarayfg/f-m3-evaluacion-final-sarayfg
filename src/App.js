import React from 'react';
import './App.scss';
import fetchHarryPotter from './services/ReasonsService';

class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    harryData: [],
  }

}

componentDidMount(){
  this.getData();
}

getData() {
  fetchHarryPotter()
    .then(data => console.log(data));
}

  render () {
    return (
      <div className="App">
        hola mundo
      </div>
    );
  }
}

export default App;
