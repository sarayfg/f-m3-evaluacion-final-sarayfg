import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class CharacterList extends React.Component {
  render () {
    const {harryData, filterNameValue} = this.props;
    console.log (harryData);
    return (
      <ul>
        {harryData
          .filter (item => item.name.includes (filterNameValue))
          .map (item => (
            <li key={item.id}>
              <CharacterCard item={item} />
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
