import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

class Filters extends React.Component {
  render () {
    const {onChangeName, filterNameValue} = this.props;
    return (
      <form className="filter-form">
        <label htmlFor="character-name" className="filter-name__label">
          Nombre del personaje
        </label>
        <input
          type="text"
          className="filter-name__input"
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
