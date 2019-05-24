import React from 'react';
import './App.scss';
import fetchHarryPotter from './services/ReasonsService';
import CharacterDetails from './components/CharacterDetails';
import Home from './components/Home';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      data: [],
    };
    this.getData= this.getData.bind(this);
  }

  componentDidMount () {
    this.getData ();
  }

  getData () {
    fetchHarryPotter ().then (data => {
      this.setState({
        data: data,
      })
    })
  }

  render () {
    const {data} = this.state;
    return (
      <div>
      <Home harryData={data}/>
      <CharacterDetails />
      </div>
    );
  }
}

export default App;
