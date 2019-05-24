import React from 'react';
import CharacterList from './CharacterList/CharacterList';
import Filters from './Filters/Filters';

class Home extends React.Component{
    render(){
        const {harryData} = this.props;
        console.log(harryData);
        return (
            <div>
                <h1>Harry Potter Characters</h1>
                <Filters />
                <CharacterList harryData={harryData}/>
            </div>
        )
    }
}

export default Home;