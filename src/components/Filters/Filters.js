import React from 'react';

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

export default Filters;
