import React, {Fragment} from 'react';

class CharacterCard extends React.Component {
    render(){
        const {item}= this.props;
        return (
            <Fragment>
            <h2>{item.name}</h2>
            <img src={item.image}></img>
            <p>{item.house}</p>
            </Fragment>
        )
    }
}

export default CharacterCard;