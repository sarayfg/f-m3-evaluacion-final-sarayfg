import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

class CharacterDetails extends React.Component {
    render(){
        const {data} = this.props;
       
        return (
            <Fragment>
                <Link to="/">See all character</Link>
                <div>
                    <h2>{data.name}</h2>
                    <img src={data.image}></img>
                    <p>{data.house}</p>
                    <p>{data.yearOfBirth}</p>
                    <p>{data.patronus}</p>
                    <p>{data.alive? 'alive' : 'dead'}</p>
                </div>
            </Fragment>
        )
    }
}

export default CharacterDetails;