import React from 'react';
import {Link} from 'react-router-dom';
import './CharacterDetails.scss';

class CharacterDetails extends React.Component {
  render () {
    const {data, chooseImg} = this.props;

    return (
      <div className="details-page">
        <Link to="/" className="back-link">See all character</Link>
        <div className="detail-card__container">
          <img
            src={data.image}
            alt={`imagen de ${data.name}`}
            className="character-img"
          />
          <div className="info-container">
            <h2 className="character-name">{data.name}</h2>
            <img
              src={chooseImg (data)}
              alt={`imagen de ${data.house}`}
              className="house-img"
            />
            <p>Año de nacimiento : {data.yearOfBirth}</p>
            <p> Patronous : {data.patronus}</p>
            <p>
              Estado :
              {data.alive
                ? ' ¡Está VIVO!'
                : <i className="fas fa-skull-crossbones" />}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterDetails;
