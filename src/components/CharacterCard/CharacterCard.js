import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import gryffindor from '../../images/gryffindor.jpg';
import Hufflepuff from '../../images/Hufflepuff.jpeg';
import Ravenclaw from '../../images/Ravenclaw.jpeg';
import Slytherin from '../../images/Slytherin.jpeg';

class CharacterCard extends React.Component {

    chooseImg(item){
        if(item.house=== 'Gryffindor'){
            return gryffindor
        } else if(item.house ===  "Slytherin"){
            return Slytherin
        } else if(item.house === "Hufflepuff") {
            return Hufflepuff
        } else {return Ravenclaw}
    }
    render(){
        const {item}= this.props;
        return (
            <Fragment>
            <h2>{item.name}</h2>
            <img src={item.image}></img>
            <img src={this.chooseImg(item)}></img>
           
            <Link to={`/characterdetails/${item.id}`}>See more information</Link>
            </Fragment>
        )
    } 
} 

CharacterCard.propTypes = {
    item: PropTypes.object.isRequired,
}
export default CharacterCard;