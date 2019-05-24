import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
class CharacterList extends React.Component{
    render() {
        const harryData =this.props.harryData;
        console.log(harryData);
        return (
            <ul>
                {harryData.map(item => (
                    <li key={item.id}>
                       <CharacterCard item={item}/>
                    </li>
                ))}
            </ul>
        )
    }
}

export default CharacterList;