import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
class CharacterList extends React.Component{
    render() {
        const {harryData, filterNameValue} =this.props;
        console.log(harryData);
        return (
            <ul>
                {harryData.filter(item => item.name.includes(filterNameValue))
                .map(item => (
                    <li key={item.id}>
                       <CharacterCard item={item}/>
                    </li>
                ))}
            </ul>
        )
    }
}

export default CharacterList;