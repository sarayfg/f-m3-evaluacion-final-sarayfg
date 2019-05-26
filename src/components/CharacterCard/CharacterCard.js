import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './CharacterCard.scss'


class CharacterCard extends React.Component {

  
    render(){
        const {item, chooseImg}= this.props;
        return (
            <Fragment>
            <Link to={`/characterdetails/${item.id}`} className="character-link">
            <img src={item.image} className="character-img"></img>
            <h2>{item.name}</h2>
            <img src={chooseImg(item)} className="house-img"></img>
            </Link>
            </Fragment>
        )
    } 
} 

CharacterCard.propTypes = {
    item: PropTypes.object.isRequired,
}
export default CharacterCard;