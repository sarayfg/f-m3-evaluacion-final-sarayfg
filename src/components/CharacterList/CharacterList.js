import React from 'react';

class CharacterList extends React.Component{
    render() {
        const harryData =this.props.harryData;
        console.log(harryData);
        return (
            <ul>
                {harryData.map(item => (
                    <li>{item.name}</li>
                ))}
            </ul>
        )
    }
}

export default CharacterList;