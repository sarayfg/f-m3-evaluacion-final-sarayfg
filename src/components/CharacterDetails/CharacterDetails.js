import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import gryffindor from '../../images/gryffindor.jpg';
import Hufflepuff from '../../images/Hufflepuff.jpeg';
import Ravenclaw from '../../images/Ravenclaw.jpeg';
import Slytherin from '../../images/Slytherin.jpeg';


class CharacterDetails extends React.Component {
    chooseImg(data){
        if(data.house=== 'Gryffindor'){
            return gryffindor
        } else if(data.house ===  "Slytherin"){
            return Slytherin
        } else if(data.house === "Hufflepuff") {
            return Hufflepuff
        } else {return Ravenclaw}
    }
    render(){
        const {data} = this.props;
       
        return (
            <Fragment>
                <Link to="/">See all character</Link>
                <div>
                    <h2>{data.name}</h2>
                    <img src={data.image}></img>
                    <img src={this.chooseImg(data)}></img>
                    <p>{data.yearOfBirth}</p>
                    <p>{data.patronus}</p>
                    <p>{data.alive? 'alive' : <i class="fas fa-skull-crossbones"></i>}</p>
                </div>
            </Fragment>
        )
    }
}

export default CharacterDetails;