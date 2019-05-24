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
      filters: {
        byName: '',
      },
    };
    this.getData = this.getData.bind (this);
    this.handlerOnChangeName = this.handlerOnChangeName.bind (this);
  }

  componentDidMount () {
    this.getData ();
  }

  getData () {
    fetchHarryPotter ().then (data => {
      const info = data.map ((item, ind) => {
        return {
          ...item,
          id: ind + 1,
        };
      });
      this.setState ({
        data: info,
      });
    });
  }

  handlerOnChangeName (event) {
    const {value} = event.currentTarget;
    this.setState (prevState => {
      return {
        filters: {
          ...prevState.filters,
          byName: value,
        },
      };
    });
  }

  render () {
    const {data} = this.state;
    const filterNameValue = this.state.filters.byName;
    return (
      <div>
        <Home
          harryData={data}
          onChangeName={this.handlerOnChangeName}
          filterNameValue={filterNameValue}
        />
        <CharacterDetails />
      </div>
    );
  }
}

export default App;
