import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types';
import './CharacterList.scss';


class CharacterList extends React.Component {
  render () {
    const {harryData, filterNameValue, chooseImg} = this.props;
    console.log (harryData);
    return (
      <ul className="character-list">
        {harryData
          .filter (item => item.name.toLowerCase().includes (filterNameValue.toLowerCase()))
          .map (item => (
            <li className="character-item" key={item.id}>
              <CharacterCard item={item} chooseImg={chooseImg}/>
            </li>
          ))}
      </ul>
    );
  }
}

CharacterList.propTypes = {
  harryData: PropTypes.array.isRequired,
  filterNameValue: PropTypes.string.isRequired,
};

export default CharacterList;
