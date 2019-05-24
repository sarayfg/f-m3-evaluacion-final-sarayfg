import React from 'react';
import CharacterList from './CharacterList/CharacterList';
import Filters from './Filters/Filters';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render () {
    const {harryData, onChangeName, filterNameValue} = this.props;
    return (
      <div>
        <Filters
          onChangeName={onChangeName}
          filterNameValue={filterNameValue}
        />
        <CharacterList
          harryData={harryData}
          filterNameValue={filterNameValue}
        />
      </div>
    );
  }
}

Home.propTypes = {
  harryData: PropTypes.array.isRequired,
  onChangeName: PropTypes.func.isRequired,
  filterNameValue: PropTypes.string.isRequired,
};

export default Home;
