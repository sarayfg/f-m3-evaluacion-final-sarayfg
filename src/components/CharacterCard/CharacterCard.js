import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class CharacterCard extends React.Component {
    render(){
        const {item}= this.props;
        return (
            <Fragment>
            <h2>{item.name}</h2>
            <img src={item.image}></img>
            <p>{item.house}</p>
            <Link to={`/characterdetails/${item.id}`}>See more information</Link>
            </Fragment>
        )
    } 
} 

CharacterCard.propTypes = {
    item: PropTypes.object.isRequired,
}
export default CharacterCard;