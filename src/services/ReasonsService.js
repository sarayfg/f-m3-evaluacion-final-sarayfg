const HarryPotterUrl = 'http://hp-api.herokuapp.com/api/characters';

const fetchHarryPotter = () =>
  fetch (HarryPotterUrl).then (response => response.json ());

export default fetchHarryPotter;
