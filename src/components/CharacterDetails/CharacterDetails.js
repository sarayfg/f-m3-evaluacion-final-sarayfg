import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

class CharacterDetails extends React.Component {
  render () {
    const {data, chooseImg} = this.props;

    return (
      <Fragment>
        <Link to="/">See all character</Link>
        <div>
          <h2>{data.name}</h2>
          <img src={data.image} />
          <img src={chooseImg (data)} />
          <p>{data.yearOfBirth}</p>
          <p>{data.patronus}</p>
          <p>{data.alive ? 'alive' : <i class="fas fa-skull-crossbones" />}</p>
        </div>
      </Fragment>
    );
  }
}

export default CharacterDetails;
