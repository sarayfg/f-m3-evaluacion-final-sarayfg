import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render () {
    const {onChangeName, filterNameValue} = this.props;
    return (
      <form>
        <label htmlFor="character-name">Nombre del personaje</label>
        <input
          type="text"
          id="character-name"
          value={filterNameValue}
          onChange={onChangeName}
        />
      </form>
    );
  }
}

Filters.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  filterNameValue: PropTypes.string.isRequired,
};

export default Filters;
