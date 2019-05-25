import React from 'react';
import './App.scss';
import fetchHarryPotter from './services/ReasonsService';
import CharacterDetails from './components/CharacterDetails';
import Home from './components/Home';
import {Route, Switch} from 'react-router-dom';

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
    this.getCharacterDetails=this.getCharacterDetails.bind(this);
  }

  componentDidMount () {
    this.getData ();
  }
  getCharacterDetails(id){
    const character= this.state.data;
    console.log(character);
    return character.find(item => item.id === parseInt(id))
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
        <header>
          <h1>Harry Potter Characters</h1>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={routerProps => (
                <Home
                  match={routerProps.match}
                  harryData={data}
                  onChangeName={this.handlerOnChangeName}
                  filterNameValue={filterNameValue}
                />
              )}
            />
            <Route 
              path="/characterdetails/:id" 
              render={routerProps => (
                <CharacterDetails 
                data={this.getCharacterDetails(routerProps.match.params.id)}
                />
              )

              }
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
